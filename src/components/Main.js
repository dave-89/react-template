import React from 'react';

import Header from './Header';
import Button from './Button';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      number: 0
    }
  }

  addStep() {
    this.state.number++;
    console.log('click number: ', this.state.number);
  }

  render() {
    return (
      <div className="Main">
        <Header title="Welcome to Step Creator"/>
        <Button title="Add new step" handleClick={this.addStep.bind(this)}/>
      </div>
    );
  }
}

export default Main;
