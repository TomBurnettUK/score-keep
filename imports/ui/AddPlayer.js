import React from 'react';

import Players from './../api/Players';

class AddPlayer extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = e.target.playerName.value;
    if (name) {
      e.target.playerName.value = '';
      Players.insert({ name, score: 0 })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;
