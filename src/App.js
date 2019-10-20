import React from 'react';
import api from './Utils/api';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://localhost:3000/logs'
    const response = api.loadData(url);
    console.log("response is...");
    console.log(response);
  }

  render() {
    return (
      <div>
        <Card handleSubmit={this.handleSubmit} />
      </div>
    );
  }
};

  export default App;
