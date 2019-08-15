const dummyMessages = [
  {
    sender: "Gideon Bamuleseyo",
    receiver: "Thika Estates",
    message: "Some interesting message"
  },
  {
    sender: "Gideon Bamuleseyo",
    receiver: "Thika Estates",
    message: "Some interesting message"
  }
];

const initialState = {
  inbox: dummyMessages
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MESSAGE":
      console.log("message created", action.message);
      return state;
    case "CREATE_MESSAGE_ERROR":
      console.log("Message not project", action.error);
      return state;
    default:
      return state;
  }
};

export default appReducer;
