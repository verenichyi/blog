import { useMemo } from 'react';
import moment from 'moment/moment';
import { useAppSelector } from 'src/hooks';
import { selectBlog } from 'src/redux/store/selectors';
import useActions from 'src/hooks/useActions';
import { blogActions } from 'src/redux/slices/blog';
import { filterByOptions, sortByOptions } from 'src/constants/blog';
import { Post } from 'src/constants/types';
import { dateFormat } from 'src/constants/date';

const UsePostsFilter = (elements) => {
  const { sortBy, filterBy, searchValue } = useAppSelector(selectBlog);
  const { setSortBy, setFilterBy, setSearchValue } = useActions(blogActions);

  const handleReset = () => {
    setFilterBy(filterByOptions.all);
    setSortBy(sortByOptions.newFirst);
    setSearchValue('');
  };

  const filteredAndSortedElements = useMemo(
    () =>
      elements
        .filter((item: Post) => {
          switch (filterBy) {
            case filterByOptions.username:
              if (searchValue.trim()) {
                return item.authorName.toLowerCase().includes(searchValue.toLowerCase());
              }
              return item;
            case filterByOptions.postName:
              if (searchValue.trim()) {
                return item.title.toLowerCase().includes(searchValue.toLowerCase());
              }
              return item;
            default:
              return item;
          }
        })
        .sort((a: Post, b: Post) => {
          switch (sortBy) {
            case sortByOptions.popularity:
              return b.likes - a.likes;
            case sortByOptions.comments:
              return b.comments.length - a.comments.length;
            case sortByOptions.newFirst:
              return moment(b.createdAt, dateFormat).diff(moment(a.createdAt, dateFormat));
          }
        }),
    [elements, filterBy, sortBy, searchValue],
  );

  return [filteredAndSortedElements, handleReset];
};

export default UsePostsFilter;
