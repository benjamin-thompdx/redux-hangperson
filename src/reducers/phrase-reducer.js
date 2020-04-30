import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { player1Input, id } = action;
  switch (action.type) {
  case c.ADD_PHRASE:
    return Object.assign({}, state, {
      [id]: {
        player1Input: player1Input,
        id: id
      }
    });

  case c.DELETE_PHRASE:
    const newState = { ...state };
    delete newState[id];
    return newState;
 

  case c.UPDATE_TIME: 
    const newPhrase = Object.assign({}, state[id], {formattedWaitTime});
    const updateState = Object.assign({}, state, {
      [id]: newTicket
    });
    return updatedState;

  default: 
    return state;
  }
};


