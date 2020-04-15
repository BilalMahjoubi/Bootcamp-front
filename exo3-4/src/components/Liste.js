import React from 'react';
import { TodoListItem } from './TodoListItem';

export class Liste extends React.Component {
  render() {
    const { filter, todos } = this.props;

    // filteredTodos returns an array of filtered todo keys [01,02,03]
    const filtres = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });
    return (
      <ul className="todos">
        {filtres.map(id => (
          <TodoListItem key={id} id={id} {...todos[id]} />
        ))}
      </ul>
    );
  }
}
