import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavItem from './components/NavItem';
import People from './container/People';
import Units from './container/Units';
// import Videos from './container/Videos';
import History from './container/History';
import MattersBody from './container/MattersBody';
import VideosBody from './container/VideosBody';
import Footer from './container/Footer';
import Dialogs from './container/Dialogs';
import data from './data/data';
import { connect } from 'react-redux'
import { updateAppSelected, updateBodyChildren, moveTaiwanOrigin, closeDialog, updateVideoSelected } from './actions'

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         home: true,
    //         selected: false,
    //     };
    // }

    selectNav = (index) => (event) => {
        if(index !== this.props.app.selected){
            this.props.dispatch(updateAppSelected(index, false));
            this.props.dispatch(moveTaiwanOrigin());
            this.props.dispatch(closeDialog());
            this.props.dispatch(updateVideoSelected(0));

            switch(index){
                case 1:
                    this.props.dispatch(updateBodyChildren(<MattersBody />));
                    break;
                case 2:
                    this.props.dispatch(updateBodyChildren(<People />));
                    break;
                case 3:
                    this.props.dispatch(updateBodyChildren(<Units />));
                    break;
                case 4:
                    this.props.dispatch(updateBodyChildren(<VideosBody />));
                    break;
                case 5:
                    this.props.dispatch(updateBodyChildren(<History />));
                    break;
                default: 
                    this.props.dispatch(updateBodyChildren([]));
            }
        }
    };

    render() {
        let app = this.props.app;
        let navList = data.map((obj, index) => <NavItem key={index} text={obj.name} selected={app.selected === index} click={this.selectNav(index)}/>);
        let className = "App" + (app.home ? ' at-home' : '');
        if(app.selected === 2 || app.selected === 3){
            className += ' no-footer';
        }
        if(this.props.dialog.open){
            className += ' has-dialog';
        }

        return (
            <div className={className}>
                <div className="App-home">
                    <div className="App-home-nav">
                        {navList}
                    </div>
                </div>
                <div className="App-wrapper">
                    <div className="App-wrapper-header" />
                    <div className="App-wrapper-nav">
                        {navList}
                    </div>
                    <div className="App-wrapper-body">
                        {this.props.body.children}
                    </div>
                    <Footer selected={app.selected}/>
                    <Dialogs />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    app: state.app,
    body: state.body,
    dialog: state.dialog
});
App = connect(mapStateToProps)(App);
export default App;
