import React, { Component } from 'react';
import './VideosBody.css';
import { connect } from 'react-redux';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const data = window.data.video;

class VideosBody extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selected: 0
    //     };
    // }

    render() {
        const item = data[this.props.video.selected];
        const src = process.env.PUBLIC_URL + "resources/" + item.video;
        return (
            <div className="VideosBody">
                <Video className="Video-video" autoPlay
                    controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                    src={src} />
                <div className="Video-content">{item.content}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    video: state.video
});
VideosBody = connect(mapStateToProps)(VideosBody);
export default VideosBody;
