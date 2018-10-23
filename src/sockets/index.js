import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../actions'

const setupSocket = (dispatch, username) => {
  var loc = window.location, ws_uri;
  if (loc.protocol === "https:") {
      ws_uri = "wss:";
  } else {
      ws_uri = "ws:";
  }
  ws_uri += "//" + loc.hostname + ":8989";
  ws_uri += loc.pathname + "/to/ws";


  const socket = new WebSocket(ws_uri)

  socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  }

  return socket
}

export default setupSocket