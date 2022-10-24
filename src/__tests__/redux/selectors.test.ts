import { selectAuth, selectBlog } from 'src/redux/store/selectors';
import { filterByOptions, sortByOptions } from 'src/constants/blog';

describe('Redux selectors', () => {
  it('should select auth state', () => {
    const auth = {
      users: { username: 'username', password: 'password' },
      isAuthorized: false,
      username: '',
    };

    const result = selectAuth({ auth });
    expect(result).toEqual(auth);
  });

  it('should select blog state', () => {
    const blog = {
      posts: [],
      sortBy: sortByOptions.newFirst,
      filterBy: filterByOptions.all,
      searchValue: '',
    };

    const result = selectBlog({ blog });
    expect(result).toEqual(blog);
  });
});
