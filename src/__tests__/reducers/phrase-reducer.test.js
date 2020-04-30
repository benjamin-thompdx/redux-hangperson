import phraseReducer from '../../reducers/phrase-reducer';

describe('phraseReducer', () => {

  let action;

  const currentState = {
    player1Input: "bamboozled",
    id: 1
  }

  const phraseData = {
    player1Input: "bamboozled",
    id: 1
  }

  test('Should return default state if no action type is recognized', () => {
    expect(phraseReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new phrase data to state', () => {
    const { player1Input, id } = phraseData;
    action = {
      type: 'ADD_PHRASE',
      player1Input: player1Input,
      id: id
    }

  })
})

