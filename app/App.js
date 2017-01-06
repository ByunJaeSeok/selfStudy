import React from 'react';
// import Contacts from './Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => { this.setState({ name: 'test' }); }}>click</button>
        <h1>Hello! {this.state.name}</h1>
      </div>
    );
  }
}

export default App;
