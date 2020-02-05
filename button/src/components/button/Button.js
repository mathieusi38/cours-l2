import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {toggled: false};
     
   this.handleClick = this.handleClick.bind(this);
   
  }



  handleClick() {
    

      
        this.setState( (oldState) => {
      return {toggled: !oldState.toggled };
      
    });
  }

  render() {
    return (
      <button
         data-testid="button"
          className={this.state.toggled ? "toggled" : "untoggled"} onClick={this.handleClick}
           >  
         { 
         
           
         }
      dqsdqsdqs
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }

}


export default Button;
