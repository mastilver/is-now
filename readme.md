# is-now [![Build Status](https://travis-ci.org/mastilver/is-now.svg?branch=master)](https://travis-ci.org/mastilver/is-now)[![Coverage Status](https://coveralls.io/repos/mastilver/is-now/badge.svg?branch=master&service=github)](https://coveralls.io/github/mastilver/is-now?branch=master)

> compare times with the current time


## Install

```
$ npm install --save is-now
```


## Usage

```js
var isNow = require('is-now');

isNow(new Date());
// true
```


## API

### isNow(time)

#### input

*Required*  
Type: `Date`, `moment`, `number`

The time to compare to the current time, if it's a number it must be a unix timestamp.


## License

MIT © [Thomas Sileghem](https://github.com/mastilver)
