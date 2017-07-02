import React, { Component } from 'react';
import './Unit.css';

class Unit extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Unit";
    if(this.props.isLeft){
      className += ' is-left';
    }
    let divStyle = {
        left: this.props.x,
        top: this.props.y,
        width: this.props.width,
        height: this.props.height
    };

    let line = this.props.line;
    let lineStyle = {
        left: line.left,
        top: line.top,
        width: line.width,
    }
    let lineClassName = 'Unit-line';
    if(line.isLeft){
        lineClassName += ' is-left';
    }else{
        lineClassName += ' is-right';
    }

    return (
        <div className={className} style={divStyle}>
            <div className={lineClassName} style={lineStyle}/>
            <div className="Unit-text" onClick={this.props.click}>
                {this.props.text}
            </div>
        </div>
    );
  }
}

export default Unit;
