import React from 'react';
import {Provider} from 'react-redux';
import Landing from './screens/Landing';
import store from './redux/index';

const App = () => {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
};

export default App;
