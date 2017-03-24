import React from 'react';

import Players from './../api/Players';

class Player extends React.Component {
  render() {
    const { player } = this.props;
    return (
      <div>
        <li key={player._id}>
          {player.name} has {player.score} point(s)
          <button onClick={() => Players.update(player._id, { $inc: { score: -1 }})}>-1</button>
          <button onClick={() => Players.update(player._id, { $inc: { score: 1 }})}>+1</button>
          <button onClick={() => Players.remove(player._id)}>x</button>
        </li>
      </div>
    );
  }
}

Player.propTypes = {
  player: React.PropTypes.object.isRequired
};

export default Player;