import React from 'react';
import { Filtre } from './components/Filtre';
import { Liste } from './components/Liste';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {
        '1': {
          label: 'Todo 1',
          completed: true
        },
        '2': {
          label: 'Todo 2',
          completed: false
        },
        '3': {
          label: 'Todo 3',
          completed: false
        },
        
      },
      filter: 'all'
    };
  }
  render() {
    const { filter, todos = [] } = this.state;
    return (
      <div>
        <Filtre filter={filter} />
        <Liste todos={todos} filter={filter} />
      </div>
    );
  }
}
export default App;
