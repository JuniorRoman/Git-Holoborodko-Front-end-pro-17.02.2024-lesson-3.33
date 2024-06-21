import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const TodoList = ({ todos, toggleTodo }) => {
  const handleTodoClick = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      <h2 className="text-center">Todo List</h2>
      <ul className="list-group mb-2">
        {todos.map((todo) => (
          <li
            className="list-group-item list-group-item-info"
            key={todo.id}
            onClick={() => handleTodoClick(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = {
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
