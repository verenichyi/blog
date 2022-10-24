import React from 'react';
import moment from 'moment';

import styles from './styles.module.scss';

import { Comment } from 'src/constants/types';
import { dateFormat } from 'src/constants/date';

interface Props {
  comment: Comment;
}

const CommentComponent = ({ comment }: Props) => {
  const { authorPhoto, authorName, context, date } = comment;

  return (
    <li className={styles.comment}>
      <div className={styles.authorPhoto}>
        <img src={authorPhoto} alt='photo' />
      </div>
      <div className={styles.content}>
        <h3>{authorName}</h3>
        <p>{context}</p>
      </div>
      <span className={styles.date}>{moment(date, dateFormat).fromNow()}</span>
    </li>
  );
};

export default CommentComponent;
