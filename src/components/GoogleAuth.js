import React from 'react';

class GoogleAuth extends React.Component {

  state = { 
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        // clientId: `${process.env.REACT_APP_CLIENT_ID}`,
        clientId: '818478223073-uggcjrla8atgs34bc4nd7b0dg4na5k75.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
      });
    });
  }

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return (
        <div>I don't know if we are signed in</div>
      )
    } else if (this.state.isSignedIn) {
      return (
        <div>I am signed in</div>
      )
    } else {
      return (
        <div>I am NOT signed in</div>
      )
    }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}

export default GoogleAuth;