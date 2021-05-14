import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const playGesture = new GestureDescription('play'); 

// Curls

playGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
playGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);

playGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);

playGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

playGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

playGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Directions

playGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)

playGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
playGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5)
playGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5)

playGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)
playGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5)
playGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5)

playGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0)
playGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5)
playGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5)

playGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0)
playGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5)
playGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5)