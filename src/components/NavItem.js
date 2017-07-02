import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "NavItem";
    if(this.props.className)className += (" " + this.props.className);
    if(this.props.selected)className += " selected";
    return (
        <div className={className} onClick={this.props.click}>
            {this.props.text}
        </div>
    );
  }
}

export default NavItem;
