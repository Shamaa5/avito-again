import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import photosReduser from "./photos";
import modalReduser from "./modal";
import {createLogger} from "redux-logger";


const logger = createLogger({
    diff: true,
    collapsed: true,
})
const rootReduser = combineReducers({
  photos: photosReduser,
  modal: modalReduser,

});
const store = createStore(rootReduser, applyMiddleware(thunk, logger))

export default store;
