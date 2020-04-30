import playerViewReducer from '../../reducers/player-view-reducer';
import * as c from '../../actions/ActionTypes';

describe('playerViewReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(playerViewReducer(true, { type: null })).toEqual(true);
  });

  test('Should toggle from visibility state to false',  () => {
    expect(playerViewReducer(true, { type: c.TOGGLE_VIEW })).toEqual(false);
  });
});