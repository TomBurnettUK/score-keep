import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Players from './../imports/api/Players';

import App from './../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find({}, { sort: { score: -1 }}).fetch();
    const title = 'Score Keep';

    ReactDOM.render(<App players={players} title={title}/>, document.getElementById('app'));
  });
});
