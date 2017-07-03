import React, { Component } from 'react';
import './Videos.css';
import VideoThumb from '../components/VideoThumb';
import { connect } from 'react-redux';
import { updateVideoSelected } from '../actions';

const data = window.data.video;

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        };
    }

    handleClick = (index) => (event) => {
        // this.setState({selected: index});
        this.props.dispatch(updateVideoSelected(index));
    };

    // changeBodyChildren = () => {
    //     if(this.props.dispatch){
    //         // let item = data[this.state.selected];
    //         // const text = item.content;
    //         // let ele = <div className="Video-content"></div>;

    //         let ele = <Video className="testVideo" autoPlay
    //             controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
    //             // poster="http://sourceposter.jpg"
    //             onCanPlayThrough={() => {
    //                 // Do stuff 
    //             }}>
    //             <source src={testVideo} type="video/mp4" />
    //         </Video>
    //         this.props.dispatch(updateBodyChildren(ele));
    //     }
    // }

    // componentDidMount(){
    //     this.changeBodyChildren();
    // }

    // componentDidUpdate(){
    //     this.changeBodyChildren();
    // }

    render() {
        const list = data.map((item, index)=>{
            const text = item.name;
            const selected = this.props.video.selected === index;
            return <VideoThumb key={index} text={text} selected={selected} click={this.handleClick(index)}/>;
        });
        
        return (
            <div className="Videos">
                {list}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    video: state.video
});
Videos = connect(mapStateToProps)(Videos);
export default Videos;
