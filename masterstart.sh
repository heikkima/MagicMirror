!/bin/bash

npm start&
#Start companion service
cd /home/pi/kuvastin/alexa-avs-sample-app/samples
cd companionService && npm start&

#Run the sample app
echo "Starting sample app."
cd /home/pi/kuvastin/alexa-avs-sample-app/samples
cd javaclient && mvn exec:exec&
echo "When finished "
#read -n1 -r -p "Press space to continue..." key

#Run the Wake Word Engine
cd /home/pi/kuvastin/alexa-avs-sample-app/samples
cd wakeWordAgent/src && ./wakeWordAgent -e sensory&

#Movement sensor
python /home/pi/kuvastin/screensaver/motionsensor.py
