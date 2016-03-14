# LEZ Landenpicker

v1.0.0

## Hoe het te gebruiken

```javascript
"dependencies": {
	"lez-landenpicker": "~1.0.0"
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
data-ng-model (verplicht) | `object` | `''` | In deze variabele wordt het gekozen land opgeslagen
label (optioneel) | `string` | `'Kies een land'` | Deze tekst wordt getoond als label voor de dropdown