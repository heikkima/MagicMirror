sudo apt-get update
sudo apt-get install -y curl 
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash
sudo apt-get install -y nodejs
npm install
npm install

echo "MMM-ImaesPhotos installation starting"
git clone https://github.com/roramirez/MMM-ImagesPhotos ~/kuvastin/modules/MMM-ImagesPhotos
cp ~/kuvastin/snipe.PNG ~/kuvastin/modules/MMM-ImagesPhotos/uploads

sudo apt-get install -y xscreensaver omxplayer arduino
sudo chmod +x /home/pi/kuvastin/screensaver/video_screensaver.sh
cp /home/pi/kuvastin/screensaver/autostart ~/.config/lxsession/LXDE-pi/autostart

<<<<<<< HEAD
sudo mv /boot/config.txt /boot/config.txt.backup
sudo cp /home/pi/kuvastin/screenrotation/config.txt /boot/config.txt
=======

>>>>>>> 2a4ecff0da5ef1a4ac2170de7c25cb334323b0ec

sudo reboot
