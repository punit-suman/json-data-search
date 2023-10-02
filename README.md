# json-data-search
Search through the values in the json. Get stringified values of the json.


## Usage

```javascript
const { AllValuesToString } = require('json-data-search');

let result = AllValuesToString(myJsonData);
```
This will return an array of strings. Each string corresponds to the stringified values of the json data. If an array of objects is passed as json data it will return an array of stringified values of each object.

```javascript
const { SearchValueInJSON } = require('json-data-search');

let result = SearchValueInJSON(myJsonData, searchText);
```
This will return an array of objects in which the given value is found. searchText can be number, string, array, boolean.