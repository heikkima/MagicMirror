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
		module: 'MMM-TweetsByTimelineOrList',
		position: 'lower_third',
		config: {
		// visit the url below for the twitter keys/tokens
		// https://dev.twitter.com/oauth/overview/application-owner-access-tokens
			consumer_key: 'BdlrMnE9s8Qu8lCYjZAeVOhpe',
			consumer_secret: '84vTgUGkNWuRA0PYvBJIxaTL7wgiLIfqS1AC68HvDGJnoZcJHa',
			access_token_key: '939119042736115713-wzoLwoLPvWvMmBpVZhwnZ0BWkbed7V1',
			access_token_secret: 'SEzEYAr5AxjwLbbd9vprN9mF92E7RyJ1zd3cR8creCp5k',
		// set the username and either timeline or listname
	        screenName: 'kuvastinblog',
	        listToShow: 'TIMELINE',
			}
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
		}
//		{
//			module: "newsfeed",
//			position: "lower_third",
//			config: {
//				feeds: [
//					
//					 {
  //                                              title: "Kuvastin Blog",
    //                                            url: "http://kuvastinblog.wordpress.com/?feed=rss"
      //                                  },
//                                        {
//						title: "Lauri Alho Wordpress",
//						url:"https://laurialho.wordpress.com/?feed=rss"
//					},
//					{
//						title: "Jaakko Jämsä Wordpress",
//						url:"https://jaakkojamsa.wordpress.com/?feed=rss"
//					},
//					{
//						title: "Teemu Kurki Github",
//						url: "https://github.com/TeemuKurki/LinuxKeskitettyHallinta/commits/master.atom"
//					},
//					{
//						title: "Miikka Huuskonen",
//						url: "https://miikkahuuskonen.wordpress.com/?feed=rss"
//					},
//					{
//						title: "Teemu Kurki Github",
//						url: "https://github.com/TeemuKurki/LinuxKeskitettyHallinta/commits/master.atom"
//					},
//					{
//						title: "Guichly Hessen Wordpress",
//						url:"https://guichlyhessen.wordpress.com/?feed=rss"
//					},
//					{
//						title: "Miikka Alatalo Github",
//						url: "https://github.com/Miikka-Alatalo/puppet/commits/master.atom"
//					},
//					{
//						title: "Juha Pitkänen Wordpress",
//						url: "https://jwpitkanen.wordpress.com/?feed=rss"
//					}
//
//
//
//				],
//				showSourceTitle: true,
//				showPublishDate: true
//			}
//		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
