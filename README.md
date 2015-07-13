```js
console.log('Path before dotbin', process.env.PATH);

require('dotbin');

console.log('Path after dotbin', process.env.PATH);
```

## Installation

```bash
$ npm install dotbin --save
```

## More examples

```js
var dotbin = require('dotbin/api');

dotbin.enable();
console.log(dotbin.check(), process.env.PATH);

dotbin.disable();
console.log(dotbin.check(), process.env.PATH);
```

