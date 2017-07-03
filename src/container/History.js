import React, { Component } from 'react';
import './History.css';
import HistoryThumb from '../components/HistoryThumb';
import { connect } from 'react-redux'
import { updateBodyChildren } from '../actions'

const data = window.data.history;

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (index) => (event) => {
        this.setState({selected: index});
    };

    changeBodyChildren = () => {
        if(this.props.dispatch){
            // let item = data[this.state.selected];
            // const text = item.content;
            let ele = <div className="History-content"></div>;
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
        const list = data.map((item, index)=>{
            const text = item.name;
            const selected = this.state.selected === index;
            return <HistoryThumb key={index} index={index} text={text} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="History">
                {list}
            </div>
        );
    }
}

History = connect()(History);
export default History;
