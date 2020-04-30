import React from "react";
import ReusableForm from './ReusableForm';
import Card from 'react-bootstrap/Card';


function Player1View() {
  return (
  <React.Fragment>
    <Card>
      <ReusableForm label="Write a word or phrase for your opponent to guess."></ReusableForm>
    </Card>
  </React.Fragment>
  );
}

export default Player1View;