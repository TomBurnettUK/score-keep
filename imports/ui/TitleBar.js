import React from 'react';

class TitleBar extends React.Component {
  renderSubtitle() {
    const { subtitle } = this.props;
    if (subtitle) {
      return <h2 className="title-bar__subtitle">{subtitle}</h2>
    }
  }
  
  render() {
    const { title } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
};

export default TitleBar;