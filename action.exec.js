'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('../../node_modules/ava-ia/lib/helpers');

exports.default = function (state) {
	
	return new Promise(function (resolve, reject) {
			
		for (var rule in Config.modules.jarvis.rules) {
			  var match = (0, _helpers.syntax)(state.sentence, Config.modules.jarvis.rules[rule]); 
			  if (match) break;
		}
		
		 setTimeout(function(){ 			
			if (match) {
				
				var value, tts = false;
				if (Config.modules.jarvis.tts_action[rule]) {
					value = Config.modules.jarvis.tts_action[rule]
					tts = true;
				}
				
				if (state.debug) info('ActionExec'.bold.yellow, 'action:', rule.yellow);
				
					state.action = {
						module: 'jarvis',
						command: rule,
						value: value,
						tts: tts		
					};	
			}		
				
			resolve(state);	
		}, 500);
	});
};
