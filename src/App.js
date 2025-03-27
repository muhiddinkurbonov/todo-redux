import React from "react";
import TodoList from "./todos/todoList";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo App</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
