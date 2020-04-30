import React from 'react';
import PropTypes from "prop-types";


function Phrase(props) {

  return (
    <React.Fragment>
      <p>{props.player1Input}</p>

    </React.Fragment>
  );
}

Phrase.propTypes = {
  player1Input: PropTypes.string
};

export default Phrase;