import React,{Component} from 'react';

class App extends Component {
  state = {
    count : 0,
  }

  inc = () => {
    this.setState({
      count : this.state.count+1
    })
  }
  render(){
    return (
      <>
        <h1>Class Components</h1>
        <h3>count :  {this.state.count}</h3>
        <button onClick={this.inc}>Increment</button>
        <button onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
      </>
    )
  }
}

export default App;