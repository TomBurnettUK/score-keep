import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    const { subtitle } = this.props;
    if (subtitle) {
      return <h2>{subtitle}</h2>
    }
  }
  
  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

export default TitleBar;