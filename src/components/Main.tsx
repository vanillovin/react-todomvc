import React from 'react';
import CompleteAllCheckbox from './CompleteAllCheckbox';
import TodoItem from './TodoItem';

const Main = ({ todoList, completeTodo, deleteTodoItem }: any) => {
  return (
    <section className="main">
      <CompleteAllCheckbox />
      <ul className="todo-list">
        {todoList.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            completeTodo={completeTodo}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default Main;
