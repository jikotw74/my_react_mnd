import React, { Component } from 'react';
import './MattersBody.css';
import data from '../data/matter';
import Matter from '../components/Matter';
import { connect } from 'react-redux';

var Scroll  = require('react-scroll');
var Element    = Scroll.Element;

class MattersBody extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    render() {
        const list = data.map((item, index)=>{
            return <Element name={this.props.matter.getScrollName(index)} className="Matter-scorll-element" key={index}>
                <Matter content={item.content} selected={this.props.matter.selected === index}/>
            </Element>
        });
        
        return (
            <div className="MattersBody" id={this.props.matter.containerID}>
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    matter: state.matter
});
MattersBody = connect(mapStateToProps)(MattersBody);
export default MattersBody;
