# LEZ Landenpicker

v1.1.5

## Hoe het eruit ziet

![Screenshot](http://s11.postimg.org/ydtg8x7w3/Untitled.png)

## Hoe het te gebruiken

```javascript
"dependencies": {
	"lez-landenpicker": "~1.1.5"
 }
```
```javascript
var app = angular.module('yourApp', [
    'lez.landenpicker'
]);
```

Deze directive wordt gebruikt om een keuzelijst te tonen met landen/landcodes.
Deze verwacht een string om als label te gaan gebruiken en een ngModel.


```html
<lez-landenpicker data-ng-model="geselecteerdLand"></lez-landenpicker>
```

Attr | Type | Default | Details
--- | --- | --- | ---
data-ng-model (verplicht) | `object` | `''` | In deze variabele wordt de ISO alpha-2 code van het gekozen land opgeslagen
data-taal (optioneel) | `string` | `'nl'` | Geef een taal-code mee om de landen in een bepaalde taal te zien (nl, de, en, fr)
data-label (optioneel) | `string` | `'Kies een land'` | Deze tekst wordt getoond als label voor de dropdown
data-empty (optioneel) | `string` | `'- kies een land'` | Deze tekst wordt getoond als initieel geselecteerde optie met een lege waarde

Deze directive gebruikt ook zijn eigen service, die op zijn beurt een base-url nodig heeft.
Die wordt opgehaald uit de `appConfig.apiUrl`. Zorg er dus voor dat deze `apiUrl` property op een `appConfig`-constant bestaat en dat deze constant geregistreerd is op je app-module.