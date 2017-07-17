import React, {PropTypes} from 'react'

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:5000/post',
      body: '{first: \'first\', second : \'second\'}'
    };
  }

  run = () => {
    fetch(this.state.endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: this.state.body
    })
    .then(response => response.json().then(data => {
      this.setState({response: data});
      return data;
    }
    ))
    .catch((error) => console.log(error));
  }

  handleSubmit = (event) => {
    this.run();
    event.preventDefault();
  }

  handleEndpoint = (event) => {
    this.setState({endpoint: event.target.value});
  }

  handleBody = (event) => {
    this.setState({body: event.target.value});
  }

  handleHeaders = (event) => {
    this.setState({headers: event.target.value});
  }

  handleAssertions = (event) => {
    this.setState({assertions: event.target.value});
  }

  handleResult = (event) => {
    this.setState({result: event.target.value});
  }

  previous = () => {
    if(this.props.id > 1) {
      return <input type="text" placeholder="previous step" value={this.state.previous}/>;
    } else {
      return <div/>
    }
  }


  render() {
    return (
      <div className="Step" style={this.state.stepStyle}>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input id="Endpoint" className="Endpoint" type="text" placeholder="Endpoint" value={this.state.endpoint} onChange={this.handleEndpoint}/>
            <input className="ReqBody" type="text" placeholder="Body" value={this.state.body} onChange={this.handleBody}/>
            <input className="Headers" type="text" placeholder="Headers" value={this.state.headers} onChange={this.handleHeaders}/>
            <input className="Assertions" type="text" placeholder="Assertions" value={this.state.assertions} onChange={this.handleAssertions}/>
            <input className="Result" type="text" placeholder="Result" value={this.state.result} onChange={this.handleResult}/>
            <input type="submit" className="Test" value="Submit" value="Test"/>
            <input type="text" value={this.state.response}/>
            {this.previous()}
          </form>
        </div>
      </div>
    );
  }
}

export default Step;
