import React, { Component } from 'react';
import './Person.css';
const data = window.data.people;

class Person extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Person";
    let item = data[this.props.index];
    let divStyle ={
        backgroundImage: `url(${process.env.PUBLIC_URL + "resources/" + item.image})`
    }
    let children = [];
    const image = <div key="1" className="Person-image" style={divStyle}/>
    const title = <div key="2" className="Person-title">{this.props.text}</div>
    children.push(image);
    children.push(title);

    if(this.props.start){
        const start = <div key="3" className="Person-start">{this.props.start}</div>    
        children.push(start);
    }

    return (
        <div className={className} onClick={this.props.click}>
            {children}
        </div>
    );
  }
}

export default Person;
