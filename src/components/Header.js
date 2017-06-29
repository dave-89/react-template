import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : this.props.title
    };
  }
  render() {
    return(
      <div className="Header">{this.state.title}</div>
    );
  }
}

export default Header;
