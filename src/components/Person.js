import React, { Component } from 'react';
import './Person.css';
import img1 from '../images/people/person01.png';
import img2 from '../images/people/person02.png';
import img3 from '../images/people/person03.png';
import img4 from '../images/people/person04.png';
import img5 from '../images/people/person05.png';
import img6 from '../images/people/person06.png';
import img7 from '../images/people/person07.png';
import img8 from '../images/people/person08.png';
import img9 from '../images/people/person09.png';
import img10 from '../images/people/person10.png';
import img11 from '../images/people/person11.png';
import img12 from '../images/people/person12.png';
import img13 from '../images/people/person13.png';
import img14 from '../images/people/person14.png';
import img15 from '../images/people/person15.png';
import img16 from '../images/people/person16.png';
import img17 from '../images/people/person17.png';
import img18 from '../images/people/person18.png';
import img19 from '../images/people/person19.png';
import img20 from '../images/people/person20.png';
import img21 from '../images/people/person21.png';
import img22 from '../images/people/person22.png';
import img23 from '../images/people/person23.png';

const images = [
    img1, 
    img2, 
    img3, 
    img4, 
    img5,
    img6, 
    img7, 
    img8, 
    img9, 
    img10,
    img11, 
    img12, 
    img13, 
    img14, 
    img15,
    img16, 
    img17, 
    img18, 
    img19, 
    img20,
    img21, 
    img22, 
    img23
];

class Person extends Component {
  // constructor(props) {
  //       super(props);
  //       this.state = {
  //           home: true
  //       };
  //   }

  render() {
    let className = "Person";
    let divStyle ={
        backgroundImage: `url(${images[(this.props.index)]})`
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
