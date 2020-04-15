import React from 'react';

export class TodoListItem extends React.Component {
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> A FAIRE VITE!!!
        </label>
      </li>
    );
  }
}
