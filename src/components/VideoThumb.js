import React, { Component } from 'react';
import './VideoThumb.css';

class VideoThumb extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "VideoThumb";
    if(this.props.selected)className += " selected";
    return (
        <div className={className} onClick={this.props.click}>
            <div className="VideoThumb-image"/>
            <div className="VideoThumb-title">
                {this.props.text}
            </div>
        </div>
    );
  }
}

export default VideoThumb;
