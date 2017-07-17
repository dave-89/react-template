import React from 'react';

import Header from './Header';
import Button from './Button';
import Step from './Step';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      stepObjects: [],
      number: 0
    }
  }

  addStep = () => {
    var i = this.state.steps.length + 1;
    var st = <Step key={i} id={i} ref={(inst) => {this.state.stepObjects.push(inst);}}/>
    this.state.steps.push(st);
    this.forceUpdate();
  }

  runAll = () => {
    this.state.stepObjects.forEach(
      step => step.run()
    );
  }

  render() {
    return (
      <div className="Main">
        <Header title="Welcome to Step Creator"/>
        <Button title="Add new step" handleClick={this.addStep}/>
        <Button title="Run All" handleClick={this.runAll}/>
        <div>
          {this.state.steps}
        </div>
      </div>
    );
  }
}

export default Main;
