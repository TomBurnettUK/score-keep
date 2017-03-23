import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Players from './../imports/api/Players';

const renderPlayers = (players) => {
  return players.map((player) => {
    return <li key={player._id}>{player.name} has {player.score} point(s)</li>;
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  const name = e.target.playerName.value;
  if (name) {
    e.target.playerName.value = '';
    Players.insert({ name, score: 0 })
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const jsx = (
      <div>
        <ul>
          {renderPlayers(players)}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add player</button>
        </form>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
