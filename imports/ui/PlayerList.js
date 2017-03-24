import React from 'react';

import Player from './../ui/Player';

class PlayerList extends React.Component {
  renderPlayers() {
    const { players } = this.props;
    if (players.length === 0) {
      return <li>Add a player to get started!</li>
    } else {
      return players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
    
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderPlayers()}
        </ul>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default PlayerList;