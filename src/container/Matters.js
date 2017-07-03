import React, { Component } from 'react';
import './Matters.css';
import Coin from '../components/Coin';
import { connect } from 'react-redux'
import { updateMatterSelected } from '../actions';
const data = window.data.matter;
var Scroll  = require('react-scroll');
var Link    = Scroll.Link;
// var Element    = Scroll.Element;
// var Events     = Scroll.Events;
// var scroll     = Scroll.animateScroll;
// var scrollSpy  = Scroll.scrollSpy;

class Matters extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 4
    //     };
    // }

    handleClick = (index) => (event) => {
        this.props.dispatch(updateMatterSelected(index));
    };

    render() {
        const list = data.map((item, index)=>{
            const text = "民國" + item.year + "年";
            const selected = this.props.matter.selected === index;

            return <Link key={index} activeClass="active" to={this.props.matter.getScrollName(index)} spy={true} smooth={true} offset={-300} duration={500} containerId={this.props.matter.containerID}>
                <Coin text={text} y={item.y} selected={selected} click={this.handleClick(index)}/>
            </Link>
        });
        
        return (
            <div className="Matters">
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    matter: state.matter
});
Matters = connect(mapStateToProps)(Matters);
export default Matters;
