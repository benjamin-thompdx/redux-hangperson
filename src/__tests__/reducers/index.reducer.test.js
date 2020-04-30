import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import playerViewReducer from '../../reducers/player-view-reducer';
import phraseReducer from '../../reducers/phrase-reducer';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      formVisibleOnPage: true,
      phraseToGuess: {}
    });
  });

  test('Check that initial state of phraseReducer matches root reducer', () => {
    expect(store.getState().phraseToGuess).toEqual(phraseReducer(undefined, { type: null }));
  });

  test('Check that initial state of playerViewReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(playerViewReducer(undefined, { type: null }));
  });

  test('Check that initial state of phraseReducer matches root reducer', () => {
    const action = {
      type: c.ADD_PHRASE,
      player1Input: "bulbous bouffant",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().phraseToGuess).toEqual(phraseReducer(undefined, action));
  });

  test('Check that initial state of playerViewReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_VIEW
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(playerViewReducer(undefined, action));
  });

});