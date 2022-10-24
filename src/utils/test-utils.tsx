import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { rootReducer } from 'src/redux/store';

const render = (
  component,
  {
    preloadedState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
