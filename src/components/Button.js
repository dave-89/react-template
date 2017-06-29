import React, {PropTypes} from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      handleClick: this.props.handleClick
    }
  }

  render() {
    return (
      <button type="button" onClick={this.state.handleClick}>{this.state.title}</button>
    );
  }
}

export default Button;
