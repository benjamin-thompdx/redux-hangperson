import React from "react";
import ReusableButton from './ReusableButton';
import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control 
          type = "text"
          name = "playerInput"
          placeholder = "Type your response here" />
        <ReusableButton 
          buttonText="Submit"
          type="submit"
          />
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  label: PropTypes.string
};

export default ReusableForm;