import React, { Component } from 'react';
import './UnitContent.css';
import { connect } from 'react-redux';
import { updateUnitsSubSelected } from '../actions';

class UnitContent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    handleClick = (index) => (event) => {
        this.props.dispatch(updateUnitsSubSelected(index));
    }

    render() {
        let className = "UnitContent";

        const data = this.props.data;
        const names = data.name.split(/\s|、/);
        const nameElements = names.map((name, index)=>{
            let subClassName = "Unit-name";
            if(this.props.unit.subSelected === index){
                subClassName += ' is-selected';
            }
            return <div key={index} className={subClassName} onClick={this.handleClick(index)}>{name}</div>
        });
        const name = <div key="1" className="Unit-name-wrapper">{nameElements}</div>
        const description = <div key="2" className="Unit-description">{data.description[this.props.unit.subSelected]}</div>

        return (
            <div className={className}>
                {name}
                {description}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    unit: state.unit
});

UnitContent = connect(mapStateToProps)(UnitContent);
export default UnitContent;
