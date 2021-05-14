import React, {useRef} from 'react';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Webcam from "react-webcam";
import './App.css';
import VideoPlayer from './videoPlayer';
import {drawHand} from "./utilities";
import { playGesture } from "./play";
import { pauseGesture } from './pause';
import { volumeUpGesture } from './volumeUp';
import { volumeDownGesture } from './volumeDown';
import { muteGesture } from './mute';
import { press } from './press'
import { nextGesture } from './next';
import { previousGesture } from './previous';

let blocked = false;

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const videoPlayerRef = useRef(null);
  var prevGesture = "";

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 200);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      console.log(hand);

      if (hand.length > 0){
        const GE = new fp.GestureEstimator([
          playGesture,
          pauseGesture,
          volumeUpGesture,
          volumeDownGesture,
          muteGesture,
          nextGesture,
          previousGesture
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 9);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0){
          const gestureName = gesture.gestures[0].name;
      
          console.log(gestureName);
          // if (gestureName === 'play') videoPlayerRef.current.handlePlay();
          // else if (gestureName === 'pause') videoPlayerRef.current.handlePause();
          // else if (gestureName === 'volumeDown') videoPlayerRef.current.handleVolumeChange(-0.01);
          // else if (gestureName === 'volumeUp') videoPlayerRef.current.handleVolumeChange(0.01);
          // else if (gestureName === 'mute') videoPlayerRef.current.handleMuted();
          // else if (gestureName === 'next' && !blocked) videoPlayerRef.current.nextVideo();
          // else if (gestureName === 'previous' && !blocked) videoPlayerRef.current.previousVideo();
          if (gestureName === 'play' && !blocked) press(0xB3, gestureName);
          else if (gestureName === 'pause' && !blocked) press(0xB3, gestureName);
          else if (gestureName === 'volumeDown') press(0xAE, gestureName);
          else if (gestureName === 'volumeUp') press(0xAF, gestureName);
          else if (gestureName === 'mute' && !blocked) press(0xAD, gestureName);
          else if (gestureName === 'next' && !blocked) press(0xB0, gestureName)
          else if (gestureName === 'previous' && !blocked) press(0xB1, gestureName)
          // console.log(blocked)
          if (['play', 'pause', 'mute', 'next', 'previous'].includes(gestureName) && !blocked) {
            blocked = true;
            setTimeout(function() {
              blocked = false;
            }, 2000)
          }
          // console.log("prev: ", prevGesture, " now: ", gestureName)
          // prevGesture = gestureName;
        }
        console.log(gesture);
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };
  runHandpose();
  return (
    <div className="App">
      <header className="App-header">
      <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: '800px',
            textAlign: "center",
            zindex: 9,
            width: 0,
            height: 0,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: '800px',
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
      <VideoPlayer
        ref={videoPlayerRef}
      />
      </header>
    </div>
  );
}

export default App;
