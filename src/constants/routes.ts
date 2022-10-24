const paths = {
  signIn: '/sign-in',
  signUp: '/sign-up',
  blog: '/',
};

const routes = {
  signIn: {
    path: paths.signIn,
    title: 'Create an account',
  },
  signUp: {
    path: paths.signUp,
    title: 'Sign in',
  },
  blog: {
    path: paths.blog,
    title: 'Blog',
  },
};

export default routes;
