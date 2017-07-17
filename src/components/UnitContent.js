import React, { Component } from 'react';
import './UnitContent.css';
import { connect } from 'react-redux';
import { updateUnitsSubSelected, updateUnitsPeople } from '../actions';
import TextField from './TextField';

class UnitContent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    handleClickPeople = (event) => {
        console.log('click');
        this.props.dispatch(updateUnitsPeople(true));
    }

    handleClick = (index) => (event) => {
        if(this.props.unit.people){
            this.props.dispatch(updateUnitsPeople(false));       
        }
        this.props.dispatch(updateUnitsSubSelected(index));
    }

    render() {
        let className = "UnitContent";
        const data = this.props.data;

        const names = data.name.split(/\s|、/);
        let nameElements = [];
        let contentElements = [];
        let people = [];
        let dataPeople;

        if(data.people instanceof Array){
            dataPeople = data.people[this.props.unit.subSelected];
        }

        if(this.props.unit.people){
            const index = this.props.unit.subSelected;
            nameElements.push(<div key={index} className="Unit-name" onClick={this.handleClick(index)}>{names[index]}</div>);
            nameElements.push(<div key={index+1} className="Unit-name is-selected">單位主官</div>);
            if(dataPeople instanceof Array){
                contentElements = dataPeople.map((item, index) => {
                    let divStyle ={
                        backgroundImage: `url(${process.env.PUBLIC_URL + "resources/" + item.image})`
                    }
                    return <div key={index} className="Unit-people__person">
                        <div className="Unit-people__person-image" style={divStyle}></div>
                        <div className="Unit-people__person-title">{item.name}</div>
                    </div>
                });
            }
        }else{
            nameElements = names.map((name, index) => {
                let subClassName = "Unit-name";
                if(this.props.unit.subSelected === index){
                    subClassName += ' is-selected';
                }
                return <div key={index} className={subClassName} onClick={this.handleClick(index)}>{name}</div>
            });
            contentElements = <TextField className="Unit-description" text={data.description[this.props.unit.subSelected]}/>;
            if(dataPeople instanceof Array){
                people = <div className="Unit-people__title" onClick={this.handleClickPeople}>單位主官</div>
            }
        }

        //
        
        // if(data.people instanceof Array){
        //     const dataPeople = data.people[this.props.unit.subSelected];
        //     if(dataPeople instanceof Array){
        //         const peopleElements = data.people[this.props.unit.subSelected].map((item, index) => {
        //             let divStyle ={
        //                 backgroundImage: `url(${process.env.PUBLIC_URL + "resources/" + item.image})`
        //             }
        //             return <div key={index} className="Unit-people__person">
        //                 <div className="Unit-people__person-image" style={divStyle}></div>
        //                 <div className="Unit-people__person-title">{item.name}</div>
        //             </div>
        //         });
        //         people = <div className="Unit-people">
        //             <div className="Unit-people__title">單位主官</div>
        //             <div className="Unit-people__wrapper">{peopleElements}</div>
        //         </div>
        //     }
        // }

        return (
            <div className={className}>
                <div className="Unit-name-wrapper">{nameElements}</div>
                <div className="Unit-content-wrapper">{contentElements}</div>
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
