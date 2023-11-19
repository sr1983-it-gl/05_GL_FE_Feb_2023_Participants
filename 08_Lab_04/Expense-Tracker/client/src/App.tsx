import React from 'react';
import { ExpenseTrackerHome } from './components/ExpenseTrackerHome';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      {<ExpenseTrackerHome></ExpenseTrackerHome>}
    </div>
  );
}

export default App;
