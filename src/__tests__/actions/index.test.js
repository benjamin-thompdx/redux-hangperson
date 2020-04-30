import * as actions from './../../actions';

describe('hangperson actions', () => {

  it('deletePhrase should create DELETE_PHRASE action', () => {
    expect(actions.deletePhrase(1)).toEqual({
      type: 'DELETE_PHRASE',
      id: 1
    });
  });

  it('toggleView should create TOGGLE_VIEW action', () => {
    expect(actions.toggleView()).toEqual({
      type: 'TOGGLE_VIEW'
    });
  });

  it('addPhrase should create ADD_PHRASE action', () => {
    expect(actions.addPhrase({player1Input: 'Banana', id: 1})).toEqual({
      type: 'ADD_PHRASE',
      player1Input: 'Banana',
      id: 1
    });
  });

})