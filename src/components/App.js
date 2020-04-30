import React from 'react';
import Header from './Header';
import HangpersonControl from './HangpersonControl';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header />
        <HangpersonControl />
      </div>
    </React.Fragment>
  );
}

export default App;
