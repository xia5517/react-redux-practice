import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, deleteItem }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <span onClick={deleteItem}>x</span>
  </li>

)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo