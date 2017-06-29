import React from 'react';

import Header from './Header';

class Main extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="Main">
        <Header title="Welcome to Step Creator"/>
      </div>
    );
  }
}

export default Main;
