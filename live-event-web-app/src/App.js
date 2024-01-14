// App.js

import React from 'react';
import Programmation from '../src/views/Programmation.js';
import Select from '../src/models/Filter.js'

const App = () => {
  return (
    <div>
      {/* Autres composants ou éléments */}
      <Select />
      <Programmation />
      {/* Autres composants ou éléments */}
    </div>
  );
};

export default App;
