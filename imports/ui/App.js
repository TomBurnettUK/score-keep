import React from 'react';

import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

class App extends React.Component {
  render() {
    const { title, subtitle, players} = this.props;
    return (
      <div>
        <TitleBar title={title} subtitle={subtitle}/>
        <div className="wrapper">
          <PlayerList players={players}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default App;