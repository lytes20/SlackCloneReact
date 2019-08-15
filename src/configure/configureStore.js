import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

import rootReducer from "../reducers/rootReducer";
import firebaseConfig from "./firebaseConfig";

// const createStoreWithFirebase = compose(
//     getFirebase, getFirestore
// )(createStore)

// const store = createStoreWithFirebase(rootReducer)
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore })),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
);

export default function getStore() {
  return store;
}
