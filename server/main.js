import { Meteor } from 'meteor/meteor';

import Players from './../imports/api/Players';

Meteor.startup(() => {
  // Players.insert({ name: 'David', score: 12 });
  console.log(Players.find().fetch());
});