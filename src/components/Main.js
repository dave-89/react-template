import React from 'react';

import Header from './Header';
import Button from './Button';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: []
    }
  }

  render() {
    return (
      <div className="Main">
        <Header title="Welcome to Step Creator"/>
        <Button title="Add new step"/>
      </div>
    );
  }
}

export default Main;
