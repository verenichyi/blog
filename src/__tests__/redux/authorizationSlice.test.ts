import authReducer, { initialState } from 'src/redux/slices/authorization';
import { authActions } from 'src/redux/slices/authorization';

const { signUp, signIn, signOut } = authActions;

describe('auth slice', () => {
  it('should return default state when passed an empty action', () => {
    const result = authReducer(undefined, { type: '' });

    expect(result).toEqual(initialState);
  });

  describe('should do the following with "signUp" action:', () => {
    let payload;
    let action;
    let result;

    beforeEach(() => {
      payload = {
        username: 'user',
        password: '1234',
      };
      action = { type: signUp.type, payload };
      result = authReducer(initialState, action);
    });

    it('add new user to "users" array ', () => {
      expect(result.users[0].username).toBe(payload.username);
      expect(result.users[0].password).toBe(payload.password);
    });

    it('add username', () => {
      expect(result.username).toBe(payload.username);
    });

    it('change "isAuthorized" field into true', () => {
      expect(result.isAuthorized).toBe(true);
    });
  });

  describe('should do the following with "signIn" action:', () => {
    let payload;
    let action;
    let result;
    const username = 'user';
    const password = 'password';
    const state = {
      users: [{ username, password }],
      isAuthorized: false,
      username,
    };

    beforeEach(() => {
      payload = {
        username,
        password,
      };
      action = { type: signIn.type, payload };
      result = authReducer(state, action);
    });

    it('check whether user with such username and password exists in state', () => {
      const user = state.users.find(
        (user) => user.username === username && user.password === password,
      );

      expect(user).toBeTruthy();
    });

    it('change "isAuthorized" field into true', () => {
      expect(result.isAuthorized).toBe(true);
    });

    it('add username', () => {
      expect(result.username).toBe(payload.username);
    });
  });

  describe('should do the following with "signOut" action:', () => {
    let action;
    let result;
    const username = 'user';
    const state = {
      users: [{ username, password: '1234' }],
      isAuthorized: true,
      username,
    };

    beforeEach(() => {
      action = { type: signOut().type };
      result = authReducer(state, action);
    });

    it('change "isAuthorized" field into false', () => {
      expect(result.isAuthorized).toBe(false);
    });

    it('reset username', () => {
      expect(result.username).toBe('');
    });
  });
});
