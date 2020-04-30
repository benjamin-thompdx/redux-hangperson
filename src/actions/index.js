export const addPhrase = (phrase) => {
  const { player1Input, id } = phrase;
  return {
    type: "ADD_PHRASE",
    player1Input: player1Input,
    id: id
  }
};

export const deletePhrase = id => ({
  type: "DELETE_PHRASE",
  id: id
});

export const toggleView = () => ({
  type: "TOGGLE_VIEW"
});





