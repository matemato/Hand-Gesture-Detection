import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const volumeUpGesture = new GestureDescription('volumeUp'); 

// Curls

volumeUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

volumeUpGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.8);

volumeUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);

volumeUpGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);

volumeUpGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

// Directions

volumeUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 2.8)
volumeUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 2.6)
volumeUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 2.6)

volumeUpGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8)
volumeUpGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8)

volumeUpGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.8)
volumeUpGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.8)

volumeUpGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.8)
volumeUpGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.8)

volumeUpGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.8)
volumeUpGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.8)

