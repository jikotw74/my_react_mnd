import React, { Component } from 'react';
import './Dialog.css';

class Dialog extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Dialog";
    if(this.props.className){
      className += " " + this.props.className;
    }
    if(this.props.open){
      className += " is-open";
    }

    // const style = {
    //   backgroundPositionY: this.props.y + "px"
    // };
    return (
        <div className={className}>
            <div className="Dialog-close-btn" onClick={this.props.onClose}/>
            <div className="Dialog-content">
                {this.props.children}
            </div>
        </div>
    );
  }
}

export default Dialog;
