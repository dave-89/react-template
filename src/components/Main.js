import React from 'react';

import Header from './Header';
import Button from './Button';
import Step from './Step';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [{id: 0, name:'first'}],
      number: 0
    }
  }

  addStep() {
    var lenght = this.state.steps.length;
    this.state.steps.push({id: lenght++, name:'first'});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="Main">
        <Header title="Welcome to Step Creator"/>
        <Button title="Add new step" handleClick={this.addStep.bind(this)}/>
        <div>
          {this.state.steps.map(step => <Step key={step.id}/>)}
        </div>
      </div>
    );
  }
}

export default Main;
