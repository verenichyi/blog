import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { filterByOptions, sortByOptions } from 'src/constants/blog';
import { Comment, Post } from 'src/constants/types';
import posts from 'src/data/posts';
import * as uuid from 'uuid';
import moment from 'moment';
import { dateFormat } from 'src/constants/date';
import userImage from 'src/assets/images/profile/userPhoto.jpg';
import postImage from 'src/assets/images/post.png';

interface State {
  posts: Post[];
  sortBy: string;
  filterBy: string;
  searchValue: string;
}

export const initialState: State = {
  posts,
  sortBy: sortByOptions.newFirst,
  filterBy: filterByOptions.all,
  searchValue: '',
};

const blog = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setSearchValue: (state: State, { payload }: PayloadAction<string>) => ({
      ...state,
      searchValue: payload,
    }),
    setSortBy: (state: State, { payload }: PayloadAction<string>) => ({
      ...state,
      sortBy: payload,
    }),
    setFilterBy: (state: State, { payload }: PayloadAction<string>) => ({
      ...state,
      filterBy: payload,
    }),
    addComment: (
      state: State,
      { payload }: PayloadAction<{ username: string; context: string; postId: number | string }>,
    ) => {
      const post = state.posts.find((post) => post.id === payload.postId);

      const comment: Comment = {
        id: uuid.v4(),
        authorPhoto: userImage,
        authorName: payload.username,
        context: payload.context,
        date: moment().format(dateFormat),
      };

      post.comments.unshift(comment);
    },
    addPost: (
      state: State,
      { payload }: PayloadAction<{ username: string; title: string; description: string }>,
    ) => {
      const post: Post = {
        id: uuid.v4(),
        title: payload.title,
        authorName: payload.username,
        description: payload.description,
        likes: 0,
        image: postImage,
        createdAt: moment().format(dateFormat),
        comments: [],
      };

      return {
        ...state,
        posts: [post, ...state.posts],
      };
    },
  },
});

export const blogActions = blog.actions;
export default blog.reducer;
