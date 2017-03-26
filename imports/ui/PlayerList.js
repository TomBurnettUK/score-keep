import React from 'react';

import Player from './../ui/Player';

class PlayerList extends React.Component {
  renderPlayers() {
    const { players } = this.props;
    if (players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add a player to get started!</p>
        </div>);
    } else {
      return players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
    
  }

  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default PlayerList;