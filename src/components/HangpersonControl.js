import React from 'react';
import Player1View from './Player1View';
import Player2View from './Player2View/Player2View';
import Phrase from './Phrase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';



class HangpersonControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: true,
      phraseToGuess: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = a.toggleView();
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleAddingNewPhrase = (player1Input) => {
    const { dispatch } = this.props;
    this.setState({phraseToGuess: player1Input})
    this.setState({formVisibleOnPage: false});
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <Player1View onNewGameCreation = {this.handleAddingNewPhrase}/>
    } else {
      currentlyVisibleState = <Player2View onGuessingLetter = {this.handleClick} />
    }


    return (
      <React.Fragment>
        { currentlyVisibleState }
      </React.Fragment>
    );
  }
}

HangpersonControl.propTypes = {
  phraseToGuess: PropTypes.object
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    phraseToGuess: state.phraseToGuess
  }
}

HangpersonControl = connect(mapStateToProps)(HangpersonControl);

export default HangpersonControl;