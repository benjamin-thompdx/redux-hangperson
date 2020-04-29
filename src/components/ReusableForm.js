import React from "react";
import ReusableButton from './ReusableButton';
import Form from 'react-bootstrap/Form';


function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form>
        <Form.Label>Come up with a word or phrase for your opponent to guess.</Form.Label>
        <Form.Control 
          type = "text"
          name = "playerInput"
          placeholder = "Type in a phrase" />
        <ReusableButton buttonText="Submit"/>
      </Form>
    </React.Fragment>
  );
}

export default ReusableForm;