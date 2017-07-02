import React, { Component } from 'react';
import './VideosBody.css';
import data from '../data/video';
import { connect } from 'react-redux';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
// import testVideo from '../video/test.mp4';

import video1 from '../video/video_01.mp4';
import video2 from '../video/video_02.mp4';
import video3 from '../video/video_03.mp4';
import video4 from '../video/video_04.mp4';
import video5 from '../video/video_05.mp4';
import video6 from '../video/video_06.mp4';

const videos = [
    video1, 
    video2, 
    video3, 
    video4, 
    video5,
    video6
];

class VideosBody extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    render() {
        return (
            <div className="VideosBody">
                <Video className="Video-video" autoPlay
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    src={videos[this.props.video.selected]} />
                <div className="Video-content">{data[this.props.video.selected].content}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    video: state.video
});
VideosBody = connect(mapStateToProps)(VideosBody);
export default VideosBody;
