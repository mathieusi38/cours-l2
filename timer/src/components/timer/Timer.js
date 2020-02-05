import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        
        time: 0,
        isOn: false,
        
      }
      

      
      
  }
  
  
  

  componentDidMount() {
    
    this.counter = setInterval( () => this.setState({
      
      time: this.state.time +1,
      isOn : true,
      
      }),1000);
    
    
  }

  componentWillUnmount() {
    this.setState({isOn: false})
    clearInterval(this.counter);
    
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.time}
      </div>
    );
  }
}

export default Timer;

