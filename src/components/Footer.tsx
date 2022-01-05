import React from 'react';

interface FooterProps {
  count: number;
}

const Footer = ({ count }: FooterProps) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count} item left</strong>
      </span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/active" className="">
            Active
          </a>
        </li>
        <span> </span>
        <li>
          <a href="#/completed" className="">
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
