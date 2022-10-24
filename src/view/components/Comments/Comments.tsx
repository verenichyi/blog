import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import styles from './styles.module.scss';

import { Comment } from 'src/constants/types';
import CommentComponent from 'src/view/components/Comment';
import useActions from 'src/hooks/useActions';
import { blogActions } from 'src/redux/slices/blog';
import { useAppSelector } from 'src/hooks';
import { selectAuth } from 'src/redux/store/selectors';

interface Props {
  comments: Comment[];
  isOpen: boolean;
  postId: number | string;
}

const Comments = ({ comments, isOpen, postId }: Props) => {
  const { username } = useAppSelector(selectAuth);
  const { addComment } = useActions(blogActions);
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    addComment({ username, context: value, postId });
    setValue('');
  };

  const memoizedComments = useMemo(
    () => (
      <ul className={styles.commentsList}>
        {comments.map((comment) => {
          return <CommentComponent key={comment.id} comment={comment} />;
        })}
      </ul>
    ),
    [comments],
  );

  return (
    <div className={styles.comments} aria-expanded={isOpen}>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            onChange={handleChange}
            value={value}
            placeholder={'Express yourself...'}
          />
          <button type={'submit'} className={styles.button}>
            Send
          </button>
        </form>
        {memoizedComments}
      </div>
    </div>
  );
};

export default Comments;
