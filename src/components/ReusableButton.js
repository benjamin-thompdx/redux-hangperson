import React from 'react';
import Button from 'react-bootstrap/Button';

function ReusableButton(props) {
  return (
      <Button 
        type={props.type}
        variant="info">
          {props.buttonText}
      </Button> 
  );
}

export default ReusableButton;