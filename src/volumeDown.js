import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const volumeDownGesture = new GestureDescription('volumeDown'); 

// Curls

volumeDownGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

volumeDownGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 0.8);

volumeDownGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);

volumeDownGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);

volumeDownGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

// Directions

volumeDownGesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 2.8)
volumeDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownRight, 2.6)
volumeDownGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalDownLeft, 2.6)

volumeDownGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8)
volumeDownGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8)

volumeDownGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.8)
volumeDownGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.8)

volumeDownGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.8)
volumeDownGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.8)

volumeDownGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.8)
volumeDownGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.8)
