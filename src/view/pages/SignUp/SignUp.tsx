import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';

import styles from './styles.module.scss';

import AuthForm from 'src/view/components/AuthForm';
import Input from 'src/view/components/Input';
import Eye from 'src/view/components/Eye';
import routes from 'src/constants/routes';
import { scale } from 'src/constants/animations';
import validation from 'src/constants/validation';
import authForm from 'src/constants/authForm';
import useActions from 'src/hooks/useActions';
import usePasswordVisibility from 'src/hooks/usePasswordVisibility';
import { authActions } from 'src/redux/slices/authorization';

interface FormItems {
  username: string;
  password: string;
  confirmation: string;
}

const SignUp = () => {
  const { username, password } = validation;
  const animationProps = useSpring(scale);
  const { signUp } = useActions(authActions);
  const { isVisible: isFirstPasswordVisible, toggle: toggleFirstPassword } =
    usePasswordVisibility();
  const { isVisible: isSecondPasswordVisible, toggle: toggleSecondPassword } =
    usePasswordVisibility();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormItems>({ mode: 'all' });

  const onSubmit: SubmitHandler<FormItems> = (data) => {
    signUp(data);
    reset();
  };

  return (
    <animated.div style={animationProps}>
      <div className={'main-container'}>
        <div className={styles.wrapper}>
          <AuthForm
            handleSubmit={handleSubmit(onSubmit)}
            title={authForm.signUp.title}
            subtitle={authForm.signUp.subtitle}
            link={routes.signUp.title}
            linkPath={routes.signIn.path}
            button={authForm.signUp.button}
          >
            <Input
              name={'username'}
              label={'Username'}
              error={errors.username}
              register={register}
              registerOptions={{
                required: username.required,
                minLength: { value: 3, message: username.message },
              }}
            />
            <Input
              name={'password'}
              label={'Password'}
              isVisible={isFirstPasswordVisible}
              error={errors.password}
              register={register}
              registerOptions={{
                required: password.required,
                minLength: { value: 4, message: password.message },
              }}
            >
              <Eye handleClick={toggleFirstPassword} />
            </Input>
            <Input
              name={'confirmation'}
              label={'Confirm password'}
              isVisible={isSecondPasswordVisible}
              error={errors.confirmation}
              register={register}
              registerOptions={{
                required: password.required,
                minLength: { value: 4, message: password.message },
                validate: (value) => value === getValues('password') || password.confirmMessage,
              }}
            >
              <Eye handleClick={toggleSecondPassword} />
            </Input>
          </AuthForm>
        </div>
      </div>
    </animated.div>
  );
};

export default SignUp;
