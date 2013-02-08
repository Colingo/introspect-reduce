# introspect-reduce

[![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6]

introspect the state of a reducible

## Example

```js
var introspect = require("introspect-reduce")
var thing = introspect(someReducible(), "what is in thing?")

// introspect will log `what is in thing {{VALUE}}` for everything
// that comes out of `someReducible()`
fold(thing, function () {
    // do stuff
})
```

## Installation

`npm install introspect-reduce`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/introspect-reduce.png
  [2]: http://travis-ci.org/Colingo/introspect-reduce
  [3]: http://david-dm.org/Colingo/introspect-reduce/status.png
  [4]: http://david-dm.org/Colingo/introspect-reduce
  [5]: http://ci.testling.com/Colingo/introspect-reduce.png
  [6]: http://ci.testling.com/Colingo/introspect-reduce
