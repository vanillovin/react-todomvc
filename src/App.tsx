import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import CompleteAllCheckbox from './components/CompleteAllCheckbox';
import './style.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
// import crypto from 'crypto';
// https://todomvc.com/examples/react/#/

type Todo = {
  id: string;
  content: string;
  completed: boolean;
};

const App = () => {
  const initialState = [
    {
      id: crypto.randomUUID(),
      content: '테스트',
      completed: true,
    },
    {
      id: crypto.randomUUID(),
      content: '춤추기',
      completed: false,
    },
  ];

  const [todoList, setTodoList] = useState<Todo[]>(initialState);

  const addTodoItem = (content: string): void => {
    const newTodoItem = { id: crypto.randomUUID(), content, completed: false };
    setTodoList((old) => [...old, newTodoItem]);
  };

  //  function deleteTodoItem(targetId) {
  //     return (e) => {
  //       setTodoList(old => old.filter(todo => todo.id !== targetId))
  //     }

  const deleteTodo = (targetId: string) => {
    setTodoList((old) => old.filter((todo) => todo.id !== targetId));
  };

  const completeTodo = (targetId: string) => {
    setTodoList((old) =>
      old.map((todo) =>
        todo.id === targetId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // console.log('App initialState', initialState);

  return (
    <section className="todoapp">
      <>
        <Header addTodoItem={addTodoItem} />
        <Main
          todoList={todoList}
          completeTodo={completeTodo}
          deleteTodoItem={deleteTodo}
        />
        <Footer count={todoList.filter((todo) => !todo.completed).length} />
      </>
    </section>
  );
};

export default App;
