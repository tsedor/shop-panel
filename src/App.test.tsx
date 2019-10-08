import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import Login from './components/Login/Login';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducers, AppState } from './reducers';

const initialState = {
  categoriesReducer: {
    fetchRequested: false,
    deleteRequested: false,
    error: '',
    categories: []
  },
  loginReducer: {
    requested: false,
    error: '',
    loggedIn: false,
    token: '',
    refreshToken: ''
  },
  uiReducer: {
    showAddCategoryModal: false
  }
}

function renderWithRedux( ui: ReactNode, { store = createStore(reducers, initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>), store
  }
}

test('render login component', () => {
  const { getByTestId } = renderWithRedux(<Login />);
})