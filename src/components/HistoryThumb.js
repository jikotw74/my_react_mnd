import React, { Component } from 'react';
import './HistoryThumb.css';
const data = window.data.history;

class HistoryThumb extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    const item = data[this.props.index];
    let divStyle ={
        backgroundImage: `url(${process.env.PUBLIC_URL + "resources/" + item.thumb})`
    }
    let className = "HistoryThumb";
    if(this.props.selected)className += " selected";
    return (
        <div className={className} onClick={this.props.click}>
            <div className="HistoryThumb-image" style={divStyle}/>
            <div className="HistoryThumb-title">
                {this.props.text}
            </div>
        </div>
    );
  }
}

export default HistoryThumb;
