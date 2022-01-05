import React from 'react';

type Todo = {
  content: string;
  completed: boolean;
};

const TodoItem = ({
  id,
  content,
  completed,
  completeTodo,
  deleteTodoItem,
}: Todo) => {
  return (
    <li className="completed">
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={completed}
          onClick={(e) => completeTodo(id)}
        />
        <label>{content}</label>
        <button className="destroy" onClick={() => deleteTodoItem(id)}></button>
      </div>
      <input className="edit" value={content} />
    </li>
  );
};

export default TodoItem;
