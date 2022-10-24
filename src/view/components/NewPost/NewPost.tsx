import React from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './styles.module.scss';

import { scale } from 'src/constants/animations';
import { useAppSelector } from 'src/hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import validation from '../../../constants/validation';
import colors from '../../../constants/colors';
import Button from '../Button';
import useActions from '../../../hooks/useActions';
import { blogActions } from '../../../redux/slices/blog';

interface FormItems {
  title: string;
  description: string;
}

interface Props {
  hide: () => void;
}

const NewPost = ({ hide }: Props) => {
  const animationProps = useSpring(scale);
  const { username } = useAppSelector((state) => state.auth);
  const { addPost } = useActions(blogActions);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormItems>({ mode: 'all' });

  const onSubmit: SubmitHandler<FormItems> = (data) => {
    addPost({ username, ...data });
    reset();
    hide();
  };

  return (
    <animated.div style={animationProps} className={styles.newPost}>
      <div className={styles.wrapper}>
        <h1>Create New Post</h1>
        <Input
          name={'title'}
          label={'Title'}
          error={errors.title}
          register={register}
          registerOptions={{
            required: validation.post.title.required,
            minLength: { value: 3, message: validation.post.title.message },
          }}
        />
        <div>
          <label className={styles.label} htmlFor={'description'}>
            Description
          </label>
          <textarea name={'description'} cols={10} rows={5} {...register('description', {})} />
        </div>
        <Button
          color={colors.primaryYellow}
          border={colors.primaryYellow}
          handler={handleSubmit(onSubmit)}
        >
          Add post
        </Button>
      </div>
    </animated.div>
  );
};

export default NewPost;
