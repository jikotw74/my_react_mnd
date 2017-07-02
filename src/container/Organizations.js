import React, { Component } from 'react';
import './Organizations.css';
import Coin from '../components/Coin';
import organization from '../data/organization';
import { connect } from 'react-redux'
import { updateBodyChildren } from '../actions'

import img1 from '../images/orgnization/orgnization_content_01.png';
import img2 from '../images/orgnization/orgnization_content_02.png';
import img3 from '../images/orgnization/orgnization_content_03.png';
import img4 from '../images/orgnization/orgnization_content_04.png';
import img5 from '../images/orgnization/orgnization_content_05.png';
import img6 from '../images/orgnization/orgnization_content_06.png';
import img7 from '../images/orgnization/orgnization_content_07.png';
import img8 from '../images/orgnization/orgnization_content_08.png';
import img9 from '../images/orgnization/orgnization_content_09.png';

const images = [
    img1, 
    img2, 
    img3, 
    img4, 
    img5,
    img6, 
    img7, 
    img8, 
    img9
];

class Organizations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 4
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index});
    };

    changeBodyChildren = () => {
        if(this.props.dispatch){
            let divStyle ={
                backgroundImage: `url(${images[(this.state.selected)]})`
            }
            let item = organization[this.state.selected];
            const text = <div key="1" className="Organization-text">{item.text}</div>
            const children = [text];
            let ele = <div className="Organization-content" style={divStyle}>{children}</div>;
            this.props.dispatch(updateBodyChildren(ele));
        }
    }

    componentDidMount(){
        this.changeBodyChildren();
    }

    componentDidUpdate(){
        this.changeBodyChildren();
    }

    render() {
        const list = organization.map((item, index)=>{
            const text = "民國" + item.year + "年";
            const selected = this.state.selected === index;
            return <Coin key={index} text={text} y={item.y} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="Organizations">
                {list}
            </div>
        );
    }
}

// Organizations = connect(select)(Organizations);

// const mapStateToProps = (state) => ({
//     body: state.body
// });

// const mapDispatchToProps = {
//     updateBodyChildren: updateBodyChildren
// };

Organizations = connect()(Organizations);
export default Organizations;
