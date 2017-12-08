import subprocess
import serial
import time

ser = serial.Serial("/dev/ttyACM0",9600)
s = []
try:
	while True:
		data = ser.readline()
		if data:
			s.append(data)
		if len(s) == 3:
			print s
			# Average of these 3
			first_str = s[0]
			second_str = s[1]
			third_str = s[2]

			first = float(first_str[0:3])
			second = float(second_str[0:3])
			third = float(third_str[0:3])


			average = (first + second + third)/3
			# print first + second + third 		#SUM
			print  average

			# Reset
			s = []

			# Movement detected
			if average >= 65:
				print "Movement detected"
				subprocess.call ('xscreensaver-command -deactivate', shell=True)

			# Go to sleep
			elif average < 65:
				print "Going to sleep..."
				subprocess.call ('xscreensaver-command -activate', shell=True)

except KeyboardInterrupt:
  print " \r\n ByeBye"
