const video = (state = [], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
      case 'MESSAGE_RECEIVED':
        return state.concat([
          {
            url: action.message
          }
        ]);
      default:
        return state
    }
  }
  
  export default video