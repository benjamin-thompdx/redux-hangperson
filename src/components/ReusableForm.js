import React from "react";
import ReusableButton from './ReusableButton';
import Form from 'react-bootstrap/Form';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control 
          type = "text"
          name = "playerInput"
          placeholder = "Type your response here" />
        <ReusableButton buttonText="Submit"/>
      </Form>
    </React.Fragment>
  );
}

export default ReusableForm;