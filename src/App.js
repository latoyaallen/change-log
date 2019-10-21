import React from 'react';
import Logs from './components/Logs';
import ProfilePic from './components/ProfilePic';
import UnreadNotifications from './components/UnreadNotifications';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unreadNotifications: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      unreadNotifications: !prevState.unreadNotifications
    }));
  }

  render() {
    let view;

    if(this.state.unreadNotifications === true) {
      view =
      <UnreadNotifications
        handleSubmit={this.handleSubmit}
      />
    }

    if(this.state.unreadNotifications === false) {
      view = <Logs />
    }

    return (
      <div>
        <ProfilePic />
        {view}
      </div>
    );
  }
};

export default App;
