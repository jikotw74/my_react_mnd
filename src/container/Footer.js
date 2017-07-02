import React, { Component } from 'react';
import './Footer.css';
import Organizations from './Organizations';
import Matters from './Matters';
import Videos from './Videos';
import History from './History';

class Footer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 4
    //     };
    // }

    render() {
        let children;
        switch(this.props.selected){
            case 0:
                children = <Organizations/>;
                break;
            case 1:
                children = <Matters/>;
                break;
            case 4:
                children = <Videos/>;
                break;
            case 5:
                children = <History/>;
                break;
            default: 
                children = [];
        }

        let className = "footer";
        if(children.length === 0)className += ' is-hidden';

        return (
            <div className={className}>
                {children}
            </div>
        );
    }
}

export default Footer;
