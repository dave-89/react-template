import React, {PropTypes} from 'react'

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://httpbin.org/post',
      body: {first: 'first', second : 'second'}
    };

    this.handleEndpoint = this.handleEndpoint.bind(this);
    this.handleBody = this.handleBody.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    fetch(this.state.endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.body)
    })
    .then((res) => res.json())
    .then((res) => res['json'])
    .then((data) => alert(JSON.stringify(data)))
    .catch((error) => console.log(error));
    event.preventDefault();
  }

  handleEndpoint(event) {
    this.setState({endpoint: event.target.value});
  }

  handleBody(event) {
    this.setState({body: event.target.value});
  }

  render() {
    return (
      <div className="Step">
        <form onSubmit={this.handleSubmit}>
          <label for="Endpoint">Endpoint</label>
          <input id="Endpoint" className="Endpoint" type="text" placeholder="Endpoint" value={this.state.endpoint} onChange={this.handleEndpoint}/>
          <input className="Body" type="text" placeholder="Body" value={JSON.stringify(this.state.body)} onChange={this.handleBody}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Step;
