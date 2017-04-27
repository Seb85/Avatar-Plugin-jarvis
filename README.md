Jarvis
=========

Ce plugin est un add-on pour le framework [Avatar](https://github.com/Spikharpax/Avatar-Serveur)

Execution de script


## Installation

- Dézippez le fichier `Avatar-Plugin-jarvis-Master.zip` dans un répertoire temporaire
- Copiez le répertoire `jarvis` dans le répertoire `Avatar-Serveur/plugins`
- Copiez le fichier `intents/intent.jarvis.js`dans le répertoire `Avatar-Serveur/ia/intents/`
- Copiez le fichier `actions/action.exec.js` dans le répertoire `Avatar-Serveur/ia/actions/`
- Editez le fichier `Avatar-Serveur/ia/actions/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript
var _actionJarvis = require('./action.exec');

Object.defineProperty(exports, 'exec', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionJarvis).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/intents/index.js`, allez à la fin du fichier et juste avant `function _interopRequireDefault(obj)` ajoutez les lignes suivantes:

```javascript

var _intentJarvis = require('./intent.jarvis');

Object.defineProperty(exports, 'jarvis', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_intentJarvis).default;
  }
});

// Fin du fichier...
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

- Editez le fichier `Avatar-Serveur/ia/index.js`
	- Ajoutez dans l'import des intents, l'intention `jarvis`
	- Ajoutez dans l'import des actions, l'action `exec`
	- Ajoutez dans la fonction export.intent(), l'association de l'intention-action

```javascript
import { jarvis, tvChannels, tvActions, music, weather, hour,  manageAvatar, shoppingList, translate, lastAction, intentEnd} from './intents';
import { exec, freeTV, freeRules, Sonos, forecastMsn, forecastYahoo, worldHour, avatarRules, shopping, translator, backupAction, actionEnd} from './actions';


exports.intent = function () {

	// Configure the intents
	ava
	 .intent(translate, translator)
	 // Déclaration jarvis CI-DESSOUS !
	 .intent(jarvis, exec)
	 .intent(hour, worldHour)
	 .intent(weather, [forecastYahoo, forecastMsn])
	 .intent(music, Sonos)
	 .intent(manageAvatar, avatarRules)
	 .intent(shoppingList, shopping)
	 .intent(lastAction, backupAction)
	 .intent(intentEnd, actionEnd)  // Toujours à la fin, controle si une règle est passée
}
```

- Copiez le répertoire `app\jarvis` dans le répertoire `Avatar-Client/app`

## Configuration

La configuration du plugin se fait dans le fichier `Avatar-Serveur/plugins/jarvis/jarvis.prop`

Les règles sont définies dans le tableau de syntaxes `rules`.

Les réponses dans le tableau de syntaxes `tts_action`.

Pour chaque ajout de commande, vous devez la faire correspondre dans le fichier `jarvis.js`. En ajoutant une variable et sa fonction.

## Versions
Version 1.0 
- Version Released
