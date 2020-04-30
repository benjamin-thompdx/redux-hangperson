import playerViewReducer from './player-view-reducer';
import phraseReducer from './phrase-reducer';
import { combineReducers } from 'redux';

// const store = createStore(rootReducer);

const rootReducer = combineReducers({
  formVisibleOnPage: playerViewReducer,
  phraseToGuess: phraseReducer
});

export default rootReducer;