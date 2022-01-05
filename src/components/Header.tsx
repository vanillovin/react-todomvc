import React from 'react';
import TodoInput from './TodoInput';

const Header = ({ addTodoItem }: any) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoInput addTodoItem={addTodoItem} />
    </header>
  );
};

export default Header;
