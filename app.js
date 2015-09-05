var hoya = require('./hoya.js');

var apiKey = "4e72526a37453632533348347846536a66694a4968705670424a344e4d2f4c6e4e55397a7a7a3138534639";
var text   = "おはようございます。";
var speaker = 'hikari';
var params = {};

var callbackTextToSpeech = function( err, resp, body ){
	if(!err && resp.statusCode === 200){
		//テスト用に書き出し
		var fs = require('fs');
		fs.writeFile('./temp/a.wav', body, 'binary', function(err){
		
		});
	}
};

hoya.textToSpeech(apiKey,text,speaker,params,callbackTextToSpeech);

