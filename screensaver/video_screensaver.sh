#!/bin/bash

process() {
while read input; do 
  case "$input" in
    UNBLANK*)	killall omxplayer.bin ;; # This will kill the process of player
    BLANK*)	omxplayer --loop --no-osd --no-keys --win "0 0 1080 1920" /home/pi/kuvastin/screensaver/720p.mp4 & ;; # dont forget the & on the end or it will never stops, just add your movie file path
  esac
done
}

/usr/bin/xscreensaver-command -watch | process
