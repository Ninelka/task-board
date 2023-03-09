import React from 'react';
import { Provider } from 'react-redux';
import Layout from './Layout/Layout';
import { setupStore } from './store';

const store = setupStore();

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
