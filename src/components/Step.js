import React, {PropTypes} from 'react'

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:5000/post',
      body: '{first: \'first\', second : \'second\'}',
      response: null
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
      body: this.state.body
    })
    .then(response => response.json().then(data => this.setState({response: data})))
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
      <div>
        <div className="Request">
          <form onSubmit={this.handleSubmit}>
            <input id="Endpoint" className="Endpoint" type="text" placeholder="Endpoint" value={this.state.endpoint} onChange={this.handleEndpoint}/>
            <input className="Body" type="text" placeholder="Body" value={this.state.body} onChange={this.handleBody}/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
        <div className="Response">
          {this.state.response}
        </div>
      </div>
    );
  }
}

export default Step;
