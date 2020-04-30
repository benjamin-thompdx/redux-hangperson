import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


function Player1View(props) {

  function handleNewGameCreation(event) {
    event.preventDefault();
    console.log("handleNewGameCreation reached!")
    props.onNewGameCreation({
      player1Input: event.target.player1Input.value, 
    });
  }

  return (
  <React.Fragment>
    <Card>
      <ReusableForm 
        label="Write a word or phrase for your opponent to guess."
        formSubmissionHandler={handleNewGameCreation}>    
      </ReusableForm>
    </Card>
  </React.Fragment>
  );
}

Player1View.propTypes = {
  onNewGameCreation: PropTypes.func
};

export default Player1View;