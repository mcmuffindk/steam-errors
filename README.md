# steam-errors
[![npm version](https://img.shields.io/npm/v/steam-errors.svg)](https://www.npmjs.com/package/steam-errors)
[![Known Vulnerabilities](https://snyk.io/test/npm/steam-errors/badge.svg)](https://snyk.io/test/npm/steam-errors?tab=dependencies)
[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://www.npmjs.com/package/steam-errors)
[![npm downloads](https://img.shields.io/npm/dt/steam-errors.svg)](https://www.npmjs.com/package/steam-errors)
[![DigitalOcean](https://img.shields.io/badge/digital-ocean-blue.svg)](https://m.do.co/c/3e4582b6db4d)

**steam-errors** is a npm package used to ease the understanding og steam errors

### Installation
`npm install steam-errors`

### Usage
```js
const steamErrors = require('steam-errors');

steamErrors(1, (err, errorObject) => {
	if(err){
		throw err;
	}
	console.log(errorObject);
});
```
