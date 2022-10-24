import { Post } from 'src/constants/types';
import image from 'src/assets/images/post.png';
import authorPhoto from 'src/assets/images/profile/userPhoto.jpg';

const posts: Post[] = [
  {
    id: 1,
    authorName: 'Jack Sparrow',
    title: 'Food',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image,
    likes: 2,
    createdAt: '2005-05-21',
    comments: [
      {
        id: 1,
        authorPhoto,
        authorName: 'Alice Wonderland',
        context: 'Great!',
        date: '2021-07-18',
      },
      {
        id: 2,
        authorPhoto,
        authorName: 'Dean Winchester',
        context:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2020-05-17',
      },
      {
        id: 3,
        authorPhoto,
        authorName: 'Garfield the Cat',
        context: '!!!!!!',
        date: '2010-07-18',
      },
    ],
  },
  {
    id: 2,
    authorName: 'Johnny depp',
    title: 'Cars',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image,
    likes: 3,
    createdAt: '2005-10-21',
    comments: [
      {
        id: 1,
        authorPhoto,
        authorName: 'Richard Hendricks',
        context:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2022-10-21',
      },
      {
        id: 2,
        authorPhoto,
        authorName: 'John Cena',
        context: 'fdfsddsadas',
        date: '2020-04-08',
      },
    ],
  },
];

export default posts;
