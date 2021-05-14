import React, { Component } from 'react'
import ReactPlayer from 'react-player'

const links = ['http://media.w3.org/2010/05/sintel/trailer.mp4', 'https://www.youtube.com/watch?v=47wq9W90bAQ', 'https://www.youtube.com/watch?v=1xuyIimXguQ']
let index = 0;

export default class VideoPlayer extends Component {
    state = {
        url: links[0],
        pip: false,
        playing: false,
        controls: true,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
      }

      nextVideo = () => {
        index = Math.abs((index+1)%links.length);
        console.log("indexNext: ", index)
        this.setState({ url: links[index]})
        this.setState({ playing: true})
      }

      previousVideo = () => {
        index = Math.abs((index-1)%links.length);
        console.log("indexPrev: ", index)
        this.setState({ url: links[index]})
        this.setState({ playing: true})
      }

      handleVolumeChange = (e) => {
        this.setState({ muted: false})
        if (this.state.volume + e <= 0) this.setState({ volume: 0})
        else if (this.state.volume + e >= 1) this.setState({ volume: 1})
        else this.setState({ volume: this.state.volume + e})
        console.log("Volume is now at ", parseFloat(this.state.volume).toFixed(2), "%.")
      }

     handlePause = () => {
        console.log('Player paused.')
        this.setState({ playing: false })
      }

      handlePlay = () => {
        console.log('Player playing.')
        this.setState({ playing: true })
      }

      handleMuted = () => {
        console.log("Player muted.")
        this.setState({ muted: true })
      }

      // loadVideo = () => {
      //   index = links.length + 1;
      //   links.push()
      // }

      render () {
        const { url, playing, controls, muted, volume } = this.state
        return (
    <div className='app'>
        <div className='player-wrapper'>
            <ReactPlayer
            style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: '700px',
                right: 0,
                bottom: '280px',
                textAlign: "center",
                zindex: 9,
                width: 'auto',
                height: 'auto',
            }}
              ref={this.ref}
              className='react-player'
              url={url}
              playing={playing}
              controls={controls}
              muted={muted}
              volume={volume}
              />
          </div>
          <div style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: '700px',
                right: 0,
                bottom: '250px',
                textAlign: "center",
                zindex: 9,
                width: 'auto',
                height: 'auto',
            }}>
        <input ref={input => { this.urlInput = input }} type='text' placeholder='Enter URL' />
        <button onClick={() => this.setState({ url: this.urlInput.value })}>Load</button>
        </div>
    </div>

        )
      }
}