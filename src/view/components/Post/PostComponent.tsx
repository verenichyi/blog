import React, { useState } from 'react';

import styles from './style.module.scss';
import icons from 'src/assets/svg/icons.svg';
import { Post } from 'src/constants/types';
import Comments from 'src/view/components/Comments';

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  const { id, authorName, title, description, image, likes, comments } = post;
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={styles.post} data-testid={'post'}>
      <div onClick={toggleHandler} className={styles.postWrapper}>
        <img className={styles.postImage} src={image} alt='post image' />
        <div className={styles.info}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.author}>{authorName}</span>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.details}>
            <div className={styles.detail}>
              <svg className={styles.likeIcon}>
                <use xlinkHref={`${icons}#like`} />
              </svg>
              <span className={styles.likes}>{likes} likes</span>
            </div>
            <div className={styles.detail}>
              <svg className={styles.commentIcon}>
                <use xlinkHref={`${icons}#comment`} />
              </svg>
              <span className={styles.comments}>{comments.length} comments</span>
            </div>
          </div>
        </div>
      </div>
      <Comments isOpen={isOpen} comments={comments} postId={id} />
    </li>
  );
};

export default PostComponent;
