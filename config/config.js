/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
//		{
//			module: "updatenotification",
//			position: "top_bar"
//		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Helsinki",
				locationID: "658225",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "11736523ac00412c4c671a55ecd95344"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Helsinki",
				locationID: "658225",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "11736523ac00412c4c671a55ecd95344"
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
			module: "MMM-ImagesPhotos",
			position: "top_center",
			config: {
				opacity: 0.9,
				animationSpeed: 500,
				updateInterval: 5000,
			}
		},
		{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					
					 {
                                                title: "Kuvastin Blog",
                                                url: "http://kuvastinblog.wordpress.com/?feed=rss"
                                        },
                                        {
						title: "Lauri Alho Wordpress",
						url:"https://laurialho.wordpress.com/?feed=rss"
					},
					{
						title: "Jaakko Jämsä Wordpress",
						url:"https://jaakkojamsa.wordpress.com/?feed=rss"
					},
					{
						title: "Teemu Kurki Github",
						url: "https://github.com/TeemuKurki/LinuxKeskitettyHallinta/commits/master.atom"
					},
					{
						title: "Miikka Huuskonen",
						url: "https://miikkahuuskonen.wordpress.com/?feed=rss"
					},
					{
						title: "Teemu Kurki Github",
						url: "https://github.com/TeemuKurki/LinuxKeskitettyHallinta/commits/master.atom"
					},
					{
						title: "Guichly Hessen Wordpress",
						url:"https://guichlyhessen.wordpress.com/?feed=rss"
					},
					{
						title: "Miikka Alatalo Github",
						url: "https://github.com/Miikka-Alatalo/puppet/commits/master.atom"
					},
					{
						title: "Juha Pitkänen Wordpress",
						url: "https://jwpitkanen.wordpress.com/?feed=rss"
					}



				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
