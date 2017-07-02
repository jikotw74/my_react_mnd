import React, { Component } from 'react';
import './Dialogs.css';
import { closeDialog, moveTaiwanOrigin } from '../actions'
import { connect } from 'react-redux';
const twPos = [
    {
        'x': 690,
        'y': 70,
    },{
        'x': 700,
        'y': 170,
    },{
        'x': 657,
        'y': 318,
    },{
        'x': 577,
        'y': 534,
    },{
        'x': 632,
        'y': 84,
    },{
        'x': 284,
        'y': 55,
    },{
        'x': 63,
        'y': 169,
    },{
        'x': 521,
        'y': 243,
    },{
        'x': 458,
        'y': 339,
    },{
        'x': 280,
        'y': 379,
    },{
        'x': 427,
        'y': 399,
    },{
        'x': 431,
        'y': 478,
    },{
        'x': 438,
        'y': 558,
    },{
        'x': 535,
        'y': 688,
    }
];

const twCancelPos = [
    {
        'x': 690,
        'y': 100,
    },{
        'x': 710,
        'y': 45,
    },{
        'x': 632,
        'y': 84,
    },{
        'x': 521,
        'y': 243,
    },{
        'x': 431,
        'y': 478,
    },{
        'x': 438,
        'y': 558,
    },{
        'x': 535,
        'y': 688,
    }

];

class Dialogs extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     selected: 4
    //     // };
    // }

    handleClose = (event) => {        
        this.props.dispatch(moveTaiwanOrigin());
        this.props.dispatch(closeDialog());
    }

    render() {        
        let dialogClassName = "Dialogs" + (this.props.unit.open ? this.props.unit.isLeft ? " has-left-tw" : " has-right-tw" : "");
        dialogClassName += (this.props.dialog.open ? " is-open" : "");

        let children = [];
        if(this.props.dialog.open){
            const closeBtn = <div key="1" className="Dialogs-close-btn" onClick={this.handleClose}/>;
            const content = <div key="2" className="Dialogs-content">
                                {this.props.dialog.children}
                            </div>;
            const black = <div key="3" className="Dialogs_black-screen"/>;
            children.push(closeBtn);
            children.push(content);
            children.push(black);
        }

        if(this.props.unit.open || this.props.app.selected === 3){
            const posArray = this.props.unit.cancel ? twCancelPos : twPos;
            const twPosElements = posArray.map((item, index) => {
                const posStyle = {
                    left: item.x,
                    top: item.y
                };
                let twPosClassName = "Dialogs-taiwan-pos";
                if(this.props.dialog.open && this.props.unit.selected === index){
                    twPosClassName += " is-selected";
                }
                return <div key={index} className={twPosClassName} style={posStyle}/>
            });
            children.push(<div key="4" className='Dialogs-taiwan'>{twPosElements}</div>);
        }

        return (
            <div className={dialogClassName}>
                {children}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    app: state.app,
    dialog: state.dialog,
    unit: state.unit
});
Dialogs = connect(mapStateToProps)(Dialogs);
export default Dialogs;
