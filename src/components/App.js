import React from 'react';
import Header from './Header';
import Player1View from './Player1View';
import Player2View from './Player2View/Player2View';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <Header />
        <Player1View />
        <Player2View />
      </div>
    </React.Fragment>
  );
}

export default App;
