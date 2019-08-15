export const createMessage = message => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("inbox")
      .add({
        ...message
      })
      .then(() => {
        dispatch({ type: "CREATE_MESSAGE", message });
      })
      .catch(error => {
        dispatch({ type: "CREATE_MESSAGE_ERROR", error });
      });
  };
};
