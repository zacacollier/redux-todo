import React, { PropTypes } from 'react'

const ToDo = {{ onClick, completed, text }} => (
        <li onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none'
           }})
    >
      {text}
    </li>
      )

ToDo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default ToDo
