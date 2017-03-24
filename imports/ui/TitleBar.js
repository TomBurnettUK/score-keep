import React from 'react';

class TitleBar extends React.Component {
  render() {
    return (
      <div>
        <h1>My App Name</h1>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};

export default TitleBar;