import React, {PropTypes} from 'react'

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      number: 0
    }
  }

  onClick() {
    this.state.number++;
    console.log('click number: ', this.state.number);
  }

  render() {
    return (
      <button type="button" onClick={this.onClick.bind(this)}>{this.state.title}</button>
    );
  }
}

export default Button;
