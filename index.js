var reducible = require("reducible")
var reduce = require("reducible/reduce")
var isReduced = require("reducible/is-reduced")
var isError = require("reducible/is-error")
var end = require("reducible/end")

var console = require("console")
var nextTick = require("process").nextTick

module.exports = introspect

function introspect(source, alias, enabled) {
    var enabled = (enabled === false) ? false : true

    return reducible(function(next, initial) {
        return reduce(source, function(value, result) {
            if (value === end) {
                enabled && console.log(alias, "<<", value)
            } else if (isError(value)) {
                enabled && console.log(alias, "\u26A1", value)
                if (enabled) {
                    throw value
                }
            } else {
                enabled && console.log(alias, value)
            }

            result = next(value, result)

            if (isReduced(result)) {
                enabled && console.log(alias, "\u2702", result.value)
            }

            return result
        }, initial)
    })
}
