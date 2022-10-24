const validation = {
  email: {
    required: 'This field is required',
    message: 'Enter correct email',
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    required: 'This field is required',
    message: 'Min length: 4',
    confirmMessage: 'Make sure the passwords matches',
  },
  username: {
    required: 'This field is required',
    message: 'Min length: 3',
  },
  post: {
    title: {
      required: 'This field is required',
      message: 'Min length: 3',
    },
  },
};

export default validation;
