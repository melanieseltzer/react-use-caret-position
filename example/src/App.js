import React from 'react';

import InputWithHook from './components/InputWithHook';
import InputWithoutHook from './components/InputWithoutHook';
import Layout from './components/Layout';

const App = () => (
  <Layout>
    <InputWithHook />
    <InputWithoutHook />
  </Layout>
);

export default App;
