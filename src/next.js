import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const nextGesture = new GestureDescription('next'); 

// Curls

nextGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

nextGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);

nextGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);

nextGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);

nextGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

// Directions

nextGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 2.8)
// nextGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 2.6)

nextGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 0.8)

nextGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 0.8)

nextGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.8)

nextGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.8)