import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from './Layout/Layout';
import { setupStore } from './store';

const store = setupStore();
const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Layout />
    </PersistGate>
  </Provider>
);

export default App;
