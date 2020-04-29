import React from 'react';
import HangpersonForm from './HangpersonForm/HangpersonForm';
import HangpersonList from './HangpersonList/HangpersonList';
import ReusableButton from '../ReusableButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Player2View() {
  return (
    <React.Fragment>
      <Container>
        <ReusableButton buttonText="NewGame"/>
        <Row>
          <Col>
            <HangpersonList />
          </Col>
          <Col>
            <HangpersonForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Player2View;