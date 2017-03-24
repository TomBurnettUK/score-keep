import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Players from './../imports/api/Players';

import TitleBar from './../imports/ui/TitleBar';
import Player from './../imports/ui/Player';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (players) => {
  return players.map((player) => {
    return <Player key={player._id} player={player}/>;
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch();
    const title = 'Score Keep';
    const subtitle = 'A simple score-keeping app';
    const jsx = (
      <div>
        <TitleBar title={title} subtitle={subtitle}/>
        <ul>
          {renderPlayers(players)}
        </ul>
        <AddPlayer/>
      </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
  });
});
