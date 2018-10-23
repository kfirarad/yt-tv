
import React from "react"
import PropTypes from "prop-types"


const Message = ({ message, author }) => {
    return <li>
      <i>{author}</i>: {message}         
    </li>
  };

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message