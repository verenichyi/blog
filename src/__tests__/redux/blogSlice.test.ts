import blogReducer, { initialState } from 'src/redux/slices/blog';
import { blogActions } from 'src/redux/slices/blog';

const { setSearchValue, setFilterBy, setSortBy, addComment, addPost } = blogActions;

describe('blog slice', () => {
  it('should return default state when passed an empty action', () => {
    const result = blogReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  it('should add new post to "posts" array with "addPost" action:', () => {
    const payload = { username: 'user', title: 'title', description: 'description' };
    const action = { type: addPost.type, payload };
    const result = blogReducer(initialState, action);

    expect(result.posts.length).toBe(initialState.posts.length + 1);
    expect(result.posts[0].authorName).toBe(payload.username);
  });

  it('should add new comment to post comments array with "addComment" action', () => {
    const payload = { username: 'username', context: 'context', postId: 1 };
    const action = { type: addComment.type, payload };
    const result = blogReducer(initialState, action);
    const post = result.posts.find((post) => post.id === payload.postId);

    expect(post).toBeTruthy();
    expect(post.comments[0].context).toBe(payload.context);
  });

  it('should set "searchValue" with "setSearchValue" action', () => {
    const payload = 'payload';
    const action = { type: setSearchValue.type, payload };
    const result = blogReducer(initialState, action);

    expect(result.searchValue).toBe(payload);
  });

  it('should set "filterBy" value with "setFilterBy" action', () => {
    const payload = 'payload';
    const action = { type: setFilterBy.type, payload };
    const result = blogReducer(initialState, action);

    expect(result.filterBy).toBe(payload);
  });

  it('should set "sortBy" value with "setSortBy" action', () => {
    const payload = 'payload';
    const action = { type: setSortBy.type, payload };
    const result = blogReducer(initialState, action);

    expect(result.sortBy).toBe(payload);
  });
});
