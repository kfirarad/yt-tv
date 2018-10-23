import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import video from "./video"

const chat = combineReducers({
  messages,
  users,
  video
});

export default chat