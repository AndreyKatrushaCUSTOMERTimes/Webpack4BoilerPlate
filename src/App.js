import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>
      <p>React here!</p>
      <p>Yes aasdasdsad </p> 
    </div>
  ;
  }   
}
function enumerable(value) {
    return function (target, key, descriptor) {
       descriptor.enumerable = value;
       return descriptor;
    }
  }
export default App;
ReactDOM.render(<App />, document.getElementById("app"));