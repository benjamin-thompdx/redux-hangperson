import React from "react";
import Arm1 from "./Arm1";
import Arm2 from "./Arm2";
import Leg1 from "./Leg1";
import Leg2 from "./Leg2";
import Head from "./Head";
import Body from "./Body";
import Card from 'react-bootstrap/Card';

function HangpersonList() {
  return (
    <React.Fragment>
      <Card>
        <Head />
        <Body />
        <Leg1 />
        <Leg2 />
        <Arm1 />
        <Arm2 />
      </Card>
    </React.Fragment>
  );
}

export default HangpersonList;