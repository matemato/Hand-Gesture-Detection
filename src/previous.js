import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const previousGesture = new GestureDescription('previous'); 

// Curls

previousGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);

previousGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 0.8);

previousGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 0.8);

previousGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 0.8);

previousGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 0.8);

// Directions

previousGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 2.8)
// previousGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 2.6)

previousGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.8)

previousGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.8)

previousGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.8)

previousGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.8)