import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <TodoList />
        <AddTodoForm />
      </div>
    </Provider>
  );
}

export default App;
