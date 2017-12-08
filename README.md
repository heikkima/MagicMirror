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
Tästä on monta eri ratkaisua ja internetistä löytyy monta kokoamis videota jotka ovat varmasti parempia kuin meidän.
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
## Näytönsäästäjä xscreensaver
xscreensaver asentui samalla kun ajoit asennus bashin. Käytämme projektissamme näytönsäästäjänä OnePlussan virallista 3D logoa.
1. Näytönsäästäjä vaatii manuaalisen käynnistyksen ensimäisellä kerralla.Käytä komentoa "xscreensaver-demo"
2. xscreensaver- valikosta muuta "Mode" - "Blank Screen Only".Voit muuttaa aikaa jolloin peili menee nukkumaan xscreensaverin "Blank After" asetuksesta
## Liiketunnistin
Tämä ohejelma ei ole sidoksissa peili ohjelmistoon vaan käytimme python koodia, joka pyörii terminaalista käsin.
### Pinni liitännät
1. Kytkevirtajohto 5v reikään
2. Toinen groundiin 
3. Ja datakaapeli A0 reikään
  
