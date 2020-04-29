import React from 'react';
import HangpersonOutputCorrect from './HangpersonOutputCorrect';
import HangpersonOutputWrong from './HangpersonOutputWrong';
import Card from 'react-bootstrap/Card';

function HangpersonOutput() {
  return (
  <React.Fragment>
    <Card>
      <HangpersonOutputCorrect />
      <HangpersonOutputWrong />
    </Card>
  </React.Fragment>
  );
}

export default HangpersonOutput;