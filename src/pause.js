import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const pauseGesture = new GestureDescription('pause'); 

// Curls

pauseGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
pauseGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);

pauseGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

pauseGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

pauseGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);

pauseGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Directions

pauseGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)
pauseGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
pauseGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

pauseGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)

pauseGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)

pauseGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0)

pauseGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0)