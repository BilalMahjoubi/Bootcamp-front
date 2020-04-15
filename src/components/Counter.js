import React from 'react';
import { Button } from './Button';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clique: 0
    };
  }
  render() {
    const { texte } = this.props;
    const { clique } = this.state;
    return (
      <div>
        {texte}: {clique}
        <Button onClick={this._onButtonClick}>Click</Button>
      </div>
    );
  }

  _onButtonClick = () => {
    this.setState({
      clique: this.state.clique + 1
    });
  };
}
