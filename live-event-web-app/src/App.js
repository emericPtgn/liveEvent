// App.js

import React from 'react';
import AppRouter from './AppRouter.js';
import DataLoader from './data/getDataFromApi.js';

const App = () => {
  DataLoader();

  return (
    <div>
      {/* Autres composants ou éléments */}
      <AppRouter />
      {/* Autres composants ou éléments */}
    </div>
  );
};

export default App;
