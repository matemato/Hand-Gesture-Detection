import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const muteGesture = new GestureDescription('mute'); 

// Curls

muteGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
muteGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);

muteGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);

muteGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);

muteGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);

muteGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// Directions

muteGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0)
muteGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0)
muteGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0)

muteGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0)
muteGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.5)
muteGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5)

muteGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0)
muteGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.5)
muteGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.5)

muteGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0)
muteGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 0.5)
muteGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 0.5)

muteGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0)
muteGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 0.5)
muteGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 0.5)