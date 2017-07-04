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
        const nameElements = names.map((name, index) => {
            let subClassName = "Unit-name";
            if(this.props.unit.subSelected === index){
                subClassName += ' is-selected';
            }
            return <div key={index} className={subClassName} onClick={this.handleClick(index)}>{name}</div>
        });
        const name = <div className="Unit-name-wrapper">{nameElements}</div>

        let descriptions = data.description[this.props.unit.subSelected];
        if(descriptions instanceof Array){
            descriptions = descriptions.map((item, index) => <div className="Unit-description-p" key={index}>{item}</div>);
        }
        const description = <div className="Unit-description">{descriptions}</div>

        //
        let people = [];
        if(data.people instanceof Array){
            const dataPeople = data.people[this.props.unit.subSelected];
            if(dataPeople instanceof Array){
                const peopleElements = data.people[this.props.unit.subSelected].map((item, index) => {
                    let divStyle ={
                        backgroundImage: `url(${process.env.PUBLIC_URL + "resources/" + item.image})`
                    }
                    return <div key={index} className="Unit-people__person">
                        <div className="Unit-people__person-image" style={divStyle}></div>
                        <div className="Unit-people__person-title">{item.name}</div>
                    </div>
                });
                people = <div className="Unit-people">
                    <div className="Unit-people__title">單位主官</div>
                    <div className="Unit-people__wrapper">{peopleElements}</div>
                </div>
            }
        }

        return (
            <div className={className}>
                {name}
                {description}
                {people}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    unit: state.unit
});

UnitContent = connect(mapStateToProps)(UnitContent);
export default UnitContent;
