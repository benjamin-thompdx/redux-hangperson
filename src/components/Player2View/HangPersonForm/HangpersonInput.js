import React from "react";
import ReusableForm from '../../ReusableForm';
import Card from 'react-bootstrap/Card';

function HangPersonInput() {
  return (
  <React.Fragment>
    <Card>
      <ReusableForm label="Write the letter you want to guess"></ReusableForm>
    </Card>
  </React.Fragment>
  );
}

export default HangPersonInput;