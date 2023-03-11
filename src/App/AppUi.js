import React from "react";
import { TodoContext } from "../Components/TodoContext";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButtom } from "../Components/CreateTodoButtom";
import { TodoForm } from "../Components/TodoForm";
import { TodosError } from "../Components/TodosError";
import { TodosLoading } from "../Components/TodosLoading";
import { EmptyTodos } from "../Components/EmptyTodos";


import { Modal } from "../Modal";

function AppUi() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodosError error = {error}/>}
        {loading && <TodosLoading/>}
        {!loading && !searchedTodos.length && <EmptyTodos/>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButtom setOpenModal = {setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUi };
