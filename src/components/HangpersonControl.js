import React from 'react';
import Player1View from './Player1View';
import Player2View from './Player2View/Player2View';

class HangpersonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Player1View onNewGameCreation = {this.handleClick}/>
      buttonText = "Start Game!";
    } else {
      currentlyVisibleState = <Player2View onGuessingLetter = {this.handleClick} />
      buttonText = "Guess Letter!";
    }


    return (
      <React.Fragment>
        { currentlyVisibleState }
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


export default HangpersonControl;