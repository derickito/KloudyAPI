App.onLaunch = function(options) {
  var urls = [], titles = [], images = [], size = [];
  //Colorvision
  urls.push("http://ss8.domint.net:2048/cvis_str/video/playlist.m3u8");
  titles.push("Colorvision");
  //images.push("http://canalesdominicanosenvivo.com/wp-content/uploads/2013/09/Color-Vision-Canal-9.jpg");
  images.push("http://dtnstv.parseapp.com/img/domtv/colorvision.png");
  size.push({width: 405, height: 150});
  //Antena Latina
  urls.push("http://ss6.domint.net:1962/al_str/antena/playlist.m3u8"); 
  titles.push("Antena Latina");
  //images.push("http://canalesdominicanosenvivo.com/wp-content/uploads/2013/09/Antena-Latina-Canal-7.jpg");
  images.push("http://dtnstv.parseapp.com/img/domtv/antena_latina.png");
  size.push({width: 546, height: 324});
  //Telesistema
  urls.push("http://mek4.mekstream.com/telesistema/smil:telesistema.smil/playlist.m3u8"); 
  titles.push("Telesistema");
  //images.push("http://canalesdominicanosenvivo.com/wp-content/uploads/2013/09/telesistema_poster-300x225.png");
  images.push("http://dtnstv.parseapp.com/img/domtv/telesistema2.png");
  size.push({width: 300, height: 120});
  //Teleantillas
  urls.push("http://mek4.mekstream.com/teleantillas/smil:teleantillas.smil/playlist.m3u8"); 
  titles.push("Teleantilla");
  //images.push("http://canalesdominicanosenvivo.com/wp-content/uploads/2013/09/Teleantillas-Canal-2.jpg");
  images.push("http://dtnstv.parseapp.com/img/domtv/teleantillas.png");
  size.push({width: 130, height: 93});
  //Canal 4
  urls.push("http://216.24.196.40:1935/live/canal4/playlist.m3u8");
  titles.push("Certv Canal 4");
  images.push("http://dtnstv.parseapp.com/img/domtv/canal4.png");
  size.push({width: 215, height: 122});
  //Teleuniverso
  urls.push("http://ss7.domint.net:1942/tu_str/universo/playlist.m3u8");
  titles.push("Teleuniverso");
  images.push("http://dtnstv.parseapp.com/img/domtv/teleuniverso.png");
  size.push({width: 390, height: 102});
  //Canal 25
  urls.push("http://ss7.domint.net:2074/tdtv_str/vision/playlist.m3u8");
  titles.push("Canal 25 Santiago");
  images.push("http://dtnstv.parseapp.com/img/domtv/canal25.jpg");
  size.push({width: 400, height: 153});
  //Telefuturo
  urls.push("http://ss7.domint.net:1950/tf_str/futu/playlist.m3u8");
  titles.push("Telefuturo Canal 23");
  images.push("http://dtnstv.parseapp.com/img/domtv/telefuturo.jpg");
  size.push({width: 600, height: 280});
  //Teleradio America
  urls.push("http://ss7.domint.net:2068/t45_str/trlive/playlist.m3u8");
  titles.push("Teleradio America");
  images.push("http://dtnstv.parseapp.com/img/domtv/tradigital.png");
  size.push({width: 400, height: 400});
  //Telecentro Canal 13
  urls.push("http://ss7.domint.net:2050/tcc_str/tc13/playlist.m3u8");
  titles.push("Telecentro Canal 13");
  images.push("http://dtnstv.parseapp.com/img/domtv/telecentro.png");
  size.push({width: 200, height: 70});
  

  //Build stackTemplate doc
  /*var str = '<document><stackTemplate><banner><title>Dominican Live TV</title></banner><collectionList><grid><section>';
  for(i = 0; i < urls.length; i++) {
    str += '<lockup url="'+urls[i]+'">'+
	         '<img src="'+images[i]+'" width="300" height="250" />'+
			 '<title>'+titles[i]+'</title>'+
	       '</lockup>';
  }
  str += '</section></grid></collectionList></stackTemplate></document>';
  */
  //Build catalogTemplate doc
  var str = '<document><catalogTemplate><banner><title>Dominican Live TV</title></banner><list><section>';
  for(i = 0; i < urls.length; i++) {
    str += '<listItemLockup url="'+urls[i]+'"><title>'+titles[i]+'</title>'+
	  '<relatedContent>'+
	    '<lockup>'+
		  '<img src="'+images[i]+'" width="'+size[i].width+'" height="'+size[i].height+'" />'+
		  '<title>'+titles[i]+'</title>'+
		'</lockup>'+
	  '</relatedContent>'+
	'</listItemLockup>';
  }
  str += '</section></list></catalogTemplate></document>';
  //console.log(str);
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, "application/xml");
  doc.addEventListener("select", playLive);
  doc.addEventListener("play", playLive);
  navigationDocument.pushDocument(doc);
  //Play
  //var player = new Player(), video = new MediaItem('video', urls[0]);
  //player.playlist = new Playlist();
  //player.playlist.push(video);
  //player.play();
}

function playLive(e) {
  var url = e.target.getAttribute('url');
  var player = new Player(), video = new MediaItem('video', url);
  player.playlist = new Playlist();
  player.playlist.push(video);
  player.play();
}
