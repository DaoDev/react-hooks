import React from "react";
import PropTypes from "prop-types";
import "./TodoList.scss";

TodoList.propTypes = {
  todo: PropTypes.array,
  onToDoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  onToDoClick: null,
};

function TodoList(props) {
  const { todos, onToDoClick } = props;

  const handleClick = (todo) => {
    if (onToDoClick) {
      onToDoClick(todo);
    }
  };

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => handleClick(todo)}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
