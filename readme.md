# bring-tracking [![Build Status](https://travis-ci.org/alonalon/bring-tracking.svg?branch=master)](https://travis-ci.org/alonalon/bring-tracking)

> Track Bring letters, parcels and pallets by their item ID number.


## Install

```
$ npm install bring-tracking
```


## Usage

```js
const bringTracking = require('bring-tracking');

bringTracking('123456789');
//=> {"consignmentSet":[{"consignmentId"..}
```


## API

### bringTracking(ID)

#### ID

*Required*<br>
Type: `string`

The item ID to track.

## CLI

```
$ npm install --global bring-tracking
```

```
$ bring --help

  Usage
    bring [ID]

  Options
    -l, --lang    Default is en. Allowed values are en, sv, no and da

  Examples
    $ bring 123456789
```


## License

MIT © [alonalon](http://aronhafner.com)
