# Senzor za zaznavo gest z roko

## 1. Zahteve:

Ves projekt je bil narejen z naslednjimi zahtevami (najverjetneje deluje vse tudi na najnovejših verzijah):

- Python version: 3.9.4  https://www.python.org/downloads/ (pip je že vključen)
- pip version: 21.1
- Node version: 15.12.0 https://nodejs.org/en/download/ (npm je že vključen)
- npm version: 7.6.3
- Uporabniški vmesnik je optimiziran za ločljivost 1920x1080.
- Testirano na windows operacijskem sistemu.

## 2. Začetek in uporaba:

Ko imate vse zahteve izpolnjene, morate prvič, ko želite pognati program narediti naslednje:

1. Odprete ukazno vrstico in se v ukazni vrstici prestavite v mapo `Hand-Gesture-Detection`.
2. Napišete ukaz `pip install -r requirements.txt`, za inštalacijo python dependencies.
3. Napišete ukaz `npm install`.
4. Ko se inštalacija dokonča, program poženete z ukazom `npm run both`. Če dobite kakšne errorje, da manjka kak dependency, vpišite ukaz za inštaliranje manjkajočih dependencijev, ki vam jo vrne error in potem ponovno poženite ukaz `npm run both`.
5. Ko je program pognan (v ukazni vrstici se vam izpiše `listening on port 3000`), odprete brskalnik (najbolje chrome) in grete na naslov: `http://localhost:3000`

Na spletni strani se vam prikaže okno na levi strani, kjer se izvaja detekcija roke. Lahko prikažete kamero ali pa samo zaznavo roke. Na desni strani je testni video, katerega lahko upravljate z gesto rok (najprej kliknite play na video in potem, ga lahko manipulirate z roko). Program pa ne deluje samo na tem testnem videu. Program deluje nad kateri koli programom, ki ima izpolnjene zahteve za media keys. Na primer če obiščete `www.youtube.com` in izberete poljuben posnetek, bo detekcija gest delovala nad tem videom. Testirano je tudi na `YouTube Music Desktop App`, najverjeneje pa deluje tudi na aplikacijah kot so `Spotify`...

## 3. Geste:

Program podpira kar 7 gest rok. Geste so:

#### 1. Play 
![Alt text](HandGestures/Play/playGestureCam.png) ![Alt text](HandGestures/Play/playGestureNoCam.png)

#### 2. Pause
![Alt text](HandGestures/Pause/pauseGestureCam.png) ![Alt text](HandGestures/Pause/pauseGestureNoCam.png)

#### 3. Mute
![Alt text](HandGestures/Mute/muteGestureCam.png) ![Alt text](HandGestures/Mute/muteGestureNoCam.png)

#### 4. VolumeUp
![Alt text](HandGestures/VolumeUp/volumeUpGestureCam.png) ![Alt text](HandGestures/VolumeUp/volumeUpGestureNoCam.png)

#### 5. VolumeDown 
![Alt text](HandGestures/VolumeDown/volumeDownGestureCam.png) ![Alt text](HandGestures/VolumeDown/volumeDownGestureNoCam.png)

#### 6. Next*
![Alt text](HandGestures/Next/nextGestureCam.png) ![Alt text](HandGestures/Next/nextGestureNoCam.png)

#### 7. Previous*
![Alt text](HandGestures/Previous/previousGestureCam.png) ![Alt text](HandGestures/Previous/previousGestureNoCam.png)

*Kamera na spletni strani ni zrcaljena, to pomeni da morate za gesto `Next` kazati z roko v desno in za `previous` v levo, vendar se na spletni strani prikaže obratno.

## 4. Želimo vam uspešno upravljanje medijev z ročnimi gestami!

## 5. Links:

FingerPose:
https://github.com/andypotato/fingerpose

TensorflowJS handpose:
https://github.com/tensorflow/tfjs-models/tree/master/handpose

