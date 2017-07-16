import React, { Component } from 'react';
import './Matter.css';
import TextField from './TextField';

class Matter extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Matter";
    if(this.props.selected){
        className += ' is-selected';
    }

    let content = this.props.content.map( (item, index) => {
        return <div key={index} className="Matter-content">
            <div className="Matter-title">
                {item.title}
            </div>
            <TextField className="Matter-description" text={item.description} />
        </div>
    });

    return (
        <div className={className}>
            {content}
        </div>
    );
  }
}

export default Matter;
