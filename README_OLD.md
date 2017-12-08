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
1. Asenna git ja kloonaa Repositorymme komennolla "git clone https://github.com/heikkima/kuvastin.git"
2. Navigoi kuvastin kansioon komennolla "cd kuvastin"
3. Aja asennus bash komennolla "bash asennus" jos tämä ei toimi kokeile poistaa kansio ja kloonauksen jälkeen aja komento "npm install && npm start"
4. Näytönsäästäjä vaatii manuaalisen käynnistyksen ensimäisellä kerralla.Käytä komentoa "xscreensaver-demo"
5. xscreensaver- valikosta muuta "Mode" - "Blank Screen Only".Voit muuttaa aikaa jolloin peili menee nukkumaan xscreensaverin "Blank After" asetuksesta
  
## Asennus virtualbox:n kautta
1. Asenna virtualbox (www.virtualbox.org/downloads)
2. Asenna uusin virtualbox ja lataa siihen Extension pack(helpottaa työskentelyä kun saa ruudun resoluution vaihdettua.)
3. Asenna ensin virtualbox ja sen jälkeen Extension pack. Lataa myös Raspbian desktop käyttöjärjestelmä.(https://www.raspberrypi.org/downloads/raspberry-pi-desktop/)
4. Käynnista virtualbox ja valitse uusi kone.
5. uusi kone kun luodaan valitaan nimeämisen jälkeen käyttöjärjestelmä. 
6. Raspberryn desktop versio on 32-bit debian järjestelmä.
7. Seuraavaksi annamme raspille muistin määrän(käytimme itse 1gb, jotta olisi  realistinen aidon kanssa.).
8. Sen jälkeen virtualbox kysyy luodaanko virtuaalinen kovalevy. Loimme virtuaalisen kovalevyn käyttämällä VHD tai VDI menetelmää.
9. Menetelmän jälkeen virtualbox kysyy käytetäänkö dynaamista kokoa vai kiinteää kokoa(käytimme dynaamista.) kuinka suuren tilan annamme kovalevylle.
 Käytimme 8gb, koska se on ihan riittävästi tarpeisiimme.
10. Kovalevyn luonnin jälkeen pääsemme valikkoon, josta valitsimme koneemme ja oikeallla hiiren napautuksella pääsemme asetuksiin.
 Asetuksista avaamme kohdan storage(varastotila) ja painamme CD-levyn kuvakkeen kohdalta lisää media. kuvake näyttää CD-levyltä, jossa on plus-merkki alalaidassa.
11. Etsimme valmiiksi ladatun raspbianin .iso tiedoston ja valitsemme sen.
12. Sen jälkeen voimme käynnistää virtuaalikoneen ja linuxin asennus alkaa.

## Guest Additions asennus koneeseen.
1. Kun olemme saaneet asennettua Linux:n koneeseen voimme aloittaa Guest additions asennuksen
(**HUOM!!!**Virtualbox:n Extensions pack pitää olla asennettu ennen kuin Giest Additions toimii.)
. Aloitamme ajamalla komennot: **sudo apt-get update -y && sudo apt-get upgrade -y**
2. Kirjaudu root käyttäjälle antamalla komento **sudo -s**. Asenna seuraavat paketit komennolla: **apt-get install build-essential module-assistant**
3. Valmistele tietokoneesi kernelin muokkaamista varten komennolla: **m-a prepare**
4. Mene Devices valikkoon ikkunan yläpalkissa ja valitse *Install Guest Additions*
5. Menemme sitten asentaman lisäosat CD-levyltä. **cd /media/cdrom/** (*tässä voi olla usempi cdrom kansio ja niistä etsiä oikea.*)ja anna komento: **sh LinuxGuestAdditions.run** .
6. Kone asentelee itsestään lisäosat ja tämän jälkeen aloittaa toimimaan, kun kone on käynnistetty uudestaan.
 **HUOM!!!** Konetta uudelleen käynnistäessä käytä virtuaalikoneen omaa valikkoa, muuten kone saattaa jäätyä korjaamattomaan tilaan uudelleen käynnistäessä.

