import React, { useMemo } from 'react';
import { animated, useSpring } from 'react-spring';

import styles from './styles.module.scss';

import PostComponent from 'src/view/components/Post';
import Filter from 'src/view/components/Filter';
import { useAppSelector } from 'src/hooks';
import UsePostsFilter from 'src/hooks/usePostsFilter';
import { selectBlog } from 'src/redux/store/selectors';
import { scale } from 'src/constants/animations';
import { Post } from 'src/constants/types';

const Blog = () => {
  const animationStyles = useSpring(scale);
  const { posts } = useAppSelector(selectBlog);
  const [filteredAndSortedElements, handleReset] = UsePostsFilter(posts);

  const postsElements = useMemo(
    () =>
      filteredAndSortedElements.map((post: Post) => <PostComponent key={post.id} post={post} />),
    [filteredAndSortedElements],
  );

  return (
    <animated.div style={animationStyles}>
      <div className={styles.wrapper}>
        <Filter handleReset={handleReset} />
        <div className={styles.content}>
          <ul className={styles.posts}>{postsElements}</ul>
        </div>
      </div>
    </animated.div>
  );
};

export default Blog;
