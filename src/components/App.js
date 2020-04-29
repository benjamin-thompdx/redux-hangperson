import React from 'react';
import Header from './Header';
import Player1View from './Player1View';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header />
        <Player1View />
      </div>
    </React.Fragment>
  );
}

export default App;
