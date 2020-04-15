import React from 'react';

export class Filtre extends React.Component {
  constructor(props) {
    super(props);
    this.state = { labelInput: '' };
  }

  render() {
    const { filter } = this.props;

    return (
      <header>
        <div className="add">
          <input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="Ce que je dois faire" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className={filter === 'all' }>all</button>
          <button className={filter === 'active' }>active</button>
          <button className={filter === 'completed'}>completed</button>
        </nav>
      </header>
    );
  }
  _onChange = evt => {
    this.setState({ labelInput: evt.target.value });
  };
}
