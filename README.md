# random-objectid

Returns a Promise that will resolve to a random 12 byte hex string.

## Install

In a project:
```sh
npm install --save-dev random-objectid
```

Globally:
```sh
npm install --global random-objectid
```

## Usage

In code:

```js
const randomObjectId = require('random-objectid')

async () => {
  const testId = await randomObjectId()
  console.log('generated random id', testId)
}
```

From CLI:

```sh
$ random-objectid
37bfc2ff43cfc1ef75abe9c3
```

# License

MIT
