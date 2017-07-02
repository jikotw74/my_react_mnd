import React, { Component } from 'react';
import './Units.css';
import Unit from '../components/Unit';
import UnitContent from '../components/UnitContent';
import dataUnits from '../data/units';
import dataCancel from '../data/cancelUnits';
import { connect } from 'react-redux';
import { openDialog, openTaiwanLeft, openTaiwanRight, updateUnitsCancel } from '../actions';
import NavItem from '../components/NavItem';

class Units extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    handleClick = (index) => (event) => {
        const data = this.props.unit.cancel ? dataCancel : dataUnits;
        let item = data[index];
        if(item.isLeft){
            this.props.dispatch(openTaiwanLeft(index));    
        }else{
            this.props.dispatch(openTaiwanRight(index));
        }
        this.props.dispatch(openDialog(<UnitContent data={item}/>));
    }

    clickCancel = () => {
        this.props.dispatch(updateUnitsCancel(true));
    }

    clickBack = () => {
        this.props.dispatch(updateUnitsCancel(false));
    }

    render() {
        const data = this.props.unit.cancel ? dataCancel : dataUnits;
        const list = data.map((item, index)=>{
            const text = item.name;
            return <Unit 
                key={index} 
                text={text} 
                x={item.x} 
                y={item.y} 
                width={item.width} 
                hight={item.height} 
                isLeft={item.isLeft}
                line={item.line}
                click={this.handleClick(index)}
            />;
        });

        let className = "Units";
        if(this.props.unit.open){
            className += " is-open";
        }

        const beforeCancel = <NavItem className="Cancel-units " text="裁撤單位" click={this.clickCancel}/>;
        const afterCancel = <div className="Cancel-wrapper">
            <NavItem className="Cancel-units is-fixed" text="裁撤單位"/>
            <div className="Cancel-close-btn"  onClick={this.clickBack}/>
        </div>
        const cancelElements = this.props.unit.cancel ? afterCancel : beforeCancel;

        return (
            <div className={className}>
                {list}
                {cancelElements}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    unit: state.unit
});

Units = connect(mapStateToProps)(Units);
export default Units;
