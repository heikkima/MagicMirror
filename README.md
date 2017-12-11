# Projektin tausta
## Alkuperäisen projektin luoja on MichMich (https://github.com/MichMich/MagicMirror)
### Projektinamme on kehittää peiliä eteenpäin
## Projektimme kotisivu josta löydät tieto työmme vaiheista ja etenemisestä
https://kuvastinblog.wordpress.com/
# Tarvikkeet
## Elektroniikka
1. Raspberry Pi 3 model B
2. Arduino Uno
3. Sharp GP2Y0 A21 Distance Infrared Sensor
4. Jatkojohto
5. Puhelimen laturi ja latauspiuha
6. Näyttö, mielellään LED jotta tekstit näkyvät lasinkin läpi
## Raaka-aineet kehystä varten
Tästä on monta eri ratkaisua ja internetistä löytyy monta videota kokoamiseen jotka ovat varmasti parempia kuin meidän.
Jos haluat tietää tarkemmin kehyksemme kokoamisesta vieraile blogimme osoitteessa https://kuvastinblog.wordpress.com/2017/10/04/2-prototyypin-rakennus/
Raaka-aineemme:
1. Lautoja
2. Lasilevy
3. Peilikalvoa Bauhaussista
4. Nauloja
5. Ruuveja
6. Paljon kuumaliimaa ja eristysteippiä
# Asennus
## Peili ohjelmisto
1. Asenna git ja kloonaa Repositorymme komennolla "git clone https://github.com/heikkima/kuvastin.git"
2. Navigoi kuvastin kansioon komennolla "cd kuvastin"
3. Aja asennus bash komennolla "bash asennus" jos tämä ei toimi kokeile poistaa kansio ja kloonauksen jälkeen aja komento "npm install && npm start"

Kyseinen shell scripti asentaa vaadittavat peilin ohjelmistot ja moduulin missä näkyy OnePlus logo ja Twitterit. Nämä moduulit ovat jo valmiiksi configuroitu /kuvastin/config/config.js tiedostossa
Scripti asentaa myös Alexa moduulin, mutta tämä pitää vielä itse configuroida. Ohjeet alhaalla.
Lopuksi scripti muuttaa /boot/config.txt tiedostoa ja käynnistää koneen kääntäen näytön 90 astetta.

## Näytönsäästäjä xscreensaver
xscreensaver asentui samalla kun ajoit asennus bashin. Käytämme projektissamme näytönsäästäjänä OnePlussan mainosvideota.
1. Näytönsäästäjä vaatii manuaalisen käynnistyksen ensimäisellä kerralla. Käytä komentoa "xscreensaver-demo"
2. xscreensaver- valikosta muuta "Mode" - "Blank Screen Only".Voit muuttaa aikaa jolloin peili menee nukkumaan xscreensaverin "Blank After" asetuksesta

## Liiketunnistin
Tämä ohejelma ei ole sidoksissa peili ohjelmistoon vaan käytimme python koodia, joka pyörii terminaalista käsin. 
Tarvitset Arduinon ja SHARP (GP2Y0A21YK0F)- analogisen etäisyys sensorin. Arduino liitetään Raspberry Pi:hin serial kaapelilla. Ohjeet sensorin yhdistäminen Arduinoon löytyy tämän tiedoston alapuolelta.  

Arduino sketch pitää uploadaa Arduinoon jotta liiketunnistin toimii
1. Käynnistä Arduino komennolla "arduino"
2. Valitse ylhäältä File -> Open
3. Valitse kuvastin.ino kansiosta kuvastin/screensaver/
3. Klikkaa Arduino- ikkunan vasen-ylä-kulmassa sijaitsevaa nuolta "Upload"

Liiketunnistimen käynnistäminen

 Voit käynnistää liiketunnistimen komennolla "python kuvastin/screensaver/motionsensor.py

 Liiketunnistin käynnistyy myös peilin mukana kun ajaa komennon "bash kuvastin/masterstart.sh"

### Arduinon pinni liitännät
1. Kytkevirtajohto 5v reikään
2. Toinen groundiin 
3. Ja datakaapeli A0 reikään

### Alexa
Asennus bashin mukana latautuu myös alexa ohjelma. Jotta alexa toimisi tarvitset USB mikrofonin, ja kaiuttimet/näytön jossa on kaiuttimet. Tämän lisäksi sinun pitää luoda amazon developer tunnukset sivulta https://developer.amazon.com

1. Luotuasi tunnukset pitää sinun luoda projekti jotta saat tarvitut tokenit ja ID:t jotta Alexa toimisi. Ohjeet projektin luomisesta löydät sivulta https://lifehacker.com/how-to-build-your-own-amazon-echo-with-a-raspberry-pi-1787726931
2. Projektin luomisen jälkeen syötä saatu ProductID, ClientID ja ClientSecret, Alexan asennus scriptiin /kuvastin/alexa-avs-sample-app/automated_install.sh
3. Korvaa scriptin alussa olevat paikat saaduillasi ID:llä ja tokenilla Amazon developer sivulta.
4. Tallenna tiedosto ja aja tämä komennolla "bash kuvastin/alexa-avs-sample-app/automated_install.sh

### Peilin käynnistys
Peilin voi käynnistää ilman alexaa ja liiketunnistinta komennolla "npm start" /kuvastin kansion sisällä.
Jos haluat käynnistää peilin liiketunnistimen kanssa käynnistä peili yllämainitulla komennolla ja avaa uusi terminal missä ajat komennon "python kuvastin/screensaver/motionsensor.py
Mikäli haluat käynnistää peilin, liikettunnistimen ja alexan, aja komento "bash kuvastin/masterstart.sh"
### Salt peiliin
1. Aja komento : #sudo apt-get update && sudo apt-get upgrade# saadaksesi uusimmat turvallisuus päivitykset saltille tai lataa salt bootstrap(googlesta salt bootstrap)
2. 

