import React, { Component } from "react";
import './css/App.css';
import Navigator from "./components/Navigator/Navigator"

class App extends Component {

  render() {


  return (
    <div className="App">
      {/* <h1>Welcome</h1> */}
      <Navigator />
    </div>
  );
}
}

export default App;
