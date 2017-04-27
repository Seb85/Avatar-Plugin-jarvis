var Promise = require('q').Promise;

require('colors');

exports.action = function(data, callback){
	
	var tblCommand = {
		radionrj: function() {radionrj(data.client);},
		radiomfm: function() {radiomfm(data.client);},
		radiofun: function() {radiofun(data.client);},
		radioalouette: function() {radioalouette(data.client);},
		radiofg: function() {radiofg(data.client);},
		radiostop: function() {radiostop(data.client);}
	};
	
	info("Jarvis command:", data.action.command.yellow, "From:", data.client.yellow);
	tblCommand[data.action.command]();
	
	callback();
}

function  radionrj(client){
		Avatar.runApp("C:\\VideoLAN\\VLC\\vlc", "C:\\Avatar\\Client\\app\\jarvis\\nrj.m3u", client);
}

function  radiomfm(client){
		Avatar.runApp("C:\\VideoLAN\\VLC\\vlc", "C:\\Avatar\\Client\\app\\jarvis\\mfm.m3u", client);
}

function  radiofun(client){
		Avatar.runApp("C:\\VideoLAN\\VLC\\vlc", "C:\\Avatar\\Client\\app\\jarvis\\fun.m3u", client);
}

function  radioalouette(client){
		Avatar.runApp("C:\\VideoLAN\\VLC\\vlc", "C:\\Avatar\\Client\\app\\jarvis\\alouette.m3u", client);
}

function  radiofg(client){
		Avatar.runApp("C:\\VideoLAN\\VLC\\vlc", "C:\\Avatar\\Client\\app\\jarvis\\fg.xspf", client);
}

function  radiostop(client){
		Avatar.runApp("C:\\VideoLAN\\VLC\\vlc", "C:\\Avatar\\Client\\app\\jarvis\\radiostop.bat", client);
}