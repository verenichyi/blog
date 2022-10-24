import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSpring, animated } from 'react-spring';

import styles from './styles.module.scss';

import AuthForm from 'src/view/components/AuthForm';
import Input from 'src/view/components/Input';
import usePasswordVisibility from 'src/hooks/usePasswordVisibility';
import Eye from 'src/view/components/Eye';
import useActions from 'src/hooks/useActions';
import { scale } from 'src/constants/animations';
import authForm from 'src/constants/authForm';
import routes from 'src/constants/routes';
import validation from 'src/constants/validation';
import { authActions } from 'src/redux/slices/authorization';

interface FormItems {
  username: string;
  password: string;
}

const SignIn = () => {
  const { username, password } = validation;
  const animationProps = useSpring(scale);
  const { signIn } = useActions(authActions);
  const { isVisible, toggle } = usePasswordVisibility();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormItems>({ mode: 'all' });

  const onSubmit: SubmitHandler<FormItems> = (data) => {
    signIn(data);
    reset();
  };

  return (
    <animated.div style={animationProps}>
      <div className={'main-container'}>
        <div className={styles.wrapper}>
          <AuthForm
            handleSubmit={handleSubmit(onSubmit)}
            title={authForm.signIn.title}
            subtitle={authForm.signIn.subtitle}
            link={routes.signIn.title}
            linkPath={routes.signUp.path}
            button={authForm.signIn.button}
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
              isVisible={isVisible}
              error={errors.password}
              register={register}
              registerOptions={{
                required: password.required,
                minLength: { value: 4, message: password.message },
              }}
            >
              <Eye handleClick={toggle} />
            </Input>
          </AuthForm>
        </div>
      </div>
    </animated.div>
  );
};

export default SignIn;
