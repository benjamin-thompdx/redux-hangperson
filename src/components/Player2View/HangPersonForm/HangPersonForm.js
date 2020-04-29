import React from "react";
import HangpersonInput from './HangpersonInput';
import HangpersonOutput from './HangpersonOutput';
import Card from 'react-bootstrap/Card';


function HangpersonForm() {
  return (
  <React.Fragment>
    <Card>
      <Card.Body>
        <Card.Title>
          <HangpersonInput />
        </Card.Title>
        <Card.Content>
          <HangpersonOutput />
        </Card.Content>
      </Card.Body>
    </Card>
  </React.Fragment>
  );
}

export default HangpersonForm;