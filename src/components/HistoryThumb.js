import React, { Component } from 'react';
import './HistoryThumb.css';

import img1 from '../images/history/history_thumb_01.png';
import img2 from '../images/history/history_thumb_02.png';
import img3 from '../images/history/history_thumb_03.png';
import img4 from '../images/history/history_thumb_04.png';
import img5 from '../images/history/history_thumb_05.png';
import img6 from '../images/history/history_thumb_06.png';
import img7 from '../images/history/history_thumb_07.png';
import img8 from '../images/history/history_thumb_08.png';

const images = [
    img1, 
    img2, 
    img3, 
    img4, 
    img5,
    img6, 
    img7, 
    img8
];

class HistoryThumb extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let divStyle ={
        backgroundImage: `url(${images[(this.props.index)]})`
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
