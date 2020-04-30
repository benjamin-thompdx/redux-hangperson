import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';


function Player1View(props) {

  function handleNewGameCreation(event) {
    event.preventDefault();
    console.log("handleNewGameCreation reached!")
    props.onNewGameCreation({
      phrase: event.target.phrase.value
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
  onNewGameCreation: PropTypes.func,
  // phrase: PropTypes.string.isRequired
  
};

export default Player1View;