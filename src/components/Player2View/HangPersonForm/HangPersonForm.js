import React from "react";
import HangpersonInput from './HangpersonInput';
import HangpersonOutput from './HangpersonOutput';
import Card from 'react-bootstrap/Card';

function HangpersonForm() {
  return (
  <React.Fragment>
    <Card>
      <HangpersonInput />
      <HangpersonOutput />
    </Card>
  </React.Fragment>
  );
}

export default HangpersonForm;