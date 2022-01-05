import React, { useState } from 'react';

const TodoInput = ({ addTodoItem }) => {
  const [todoInput, setTodoInput] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(event.currentTarget.value);
  };

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      addTodoItem(todoInput);
      setTodoInput('');
    }
  }

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={todoInput}
      onChange={onChange}
      onKeyUp={handleKeyUp}
    />
  );
};

export default TodoInput;
