import React, { Component } from 'react';
import './Dialogs.css';
import { closeDialog, moveTaiwanOrigin } from '../actions'
import { connect } from 'react-redux';
const twPos = [
    {
        'x': 850,
        'y': 160,
    },{
        'x': 860,
        'y': 260,
    },{
        'x': 817,
        'y': 408,
    },{
        'x': 737,
        'y': 624,
    },{
        'x': 792,
        'y': 174,
    },{
        'x': 444,
        'y': 145,
    },{
        'x': 307,
        'y': 291,
    },{
        'x': 679,
        'y': 367,
    },{
        'x': 554,
        'y': 469,
    },{
        'x': 421,
        'y': 508,
    },{
        'x': 530,
        'y': 547,
    },{
        'x': 534,
        'y': 628,
    },{
        'x': 557,
        'y': 719,
    },{
        'x': 671,
        'y': 853,
    }
];

const twCancelPos = [
    {
        'x': 860,
        'y': 166,
    },{
        'x': 911,
        'y': 138,
    },{
        'x': 784,
        'y': 202,
    },{
        'x': 689,
        'y': 361,
    },{
        'x': 584,
        'y': 680,
    },{
        'x': 560,
        'y': 713,
    },{
        'x': 559,
        'y': 751,
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
