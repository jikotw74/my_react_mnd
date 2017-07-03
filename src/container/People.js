import React, { Component } from 'react';
import './People.css';
import Person from '../components/Person';
import { connect } from 'react-redux'
import { openDialog } from '../actions'

const data = window.data.people;

class People extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    handleClick = (index) => (event) => {
        const item = data[index];
        const image = <Person key="1" index={index} text={item.name}/>;
        const startArray = item.start.split(".");
        const endArray = item.end.split(".");
        const during = "起任日期：民國" + startArray[0] + "年" + startArray[1] + "月" + startArray[2] + "日 ~ 民國" + endArray[0] + "年" + endArray[1] + "月" + endArray[2] + "日";
        const description = <div key="2" className="Person-description">
            <div className="Person-detail-during">{during}</div>
            <div className="Person-detail-text">{item.description}</div>
        </div>;
        
        const children = [image, description];
        let ele = <div className="Person-detail">{children}</div>;
        this.props.dispatch(openDialog(ele));
    };

    render() {
        const list = data.map((item, index)=>{
            const start = "民國 " + item.start.substr(0, 2) + " 年";
            return <Person key={index} index={index} text={item.name} start={start} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="People">
                {list}
            </div>
        );
    }
}

People = connect()(People);
export default People;
