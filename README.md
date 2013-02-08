# introspect

[![build status][1]][2] [![dependency status][3]][4]

[![browser support][5]][6]

introspect the state of a reducible

## Example

```js
var thing = introspect(someReducible(), "what is in thing?")

// introspect will log `what is in thing {{VALUE}}` for everything
// that comes out of `someReducible()`
fold(thing, function () {
    // do stuff
})
```

## Installation

`npm install introspect`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Colingo/introspect.png
  [2]: http://travis-ci.org/Colingo/introspect
  [3]: http://david-dm.org/Colingo/introspect/status.png
  [4]: http://david-dm.org/Colingo/introspect
  [5]: http://ci.testling.com/Colingo/introspect.png
  [6]: http://ci.testling.com/Colingo/introspect
