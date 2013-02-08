var test = require("tape")
var fold = require("reducers/fold")
var introspect = require("../index")

test("introspect something", function (assert) {
    var list = introspect([1, 2, 3], "# - introspecting list")

    fold(list, function () {})

    assert.end()
})

test("introspect error", function (assert) {
    var list = introspect([1, new Error("foo"), 2], "# - introspecting error")

    assert.throws(function () {
        fold(list, function () {})
    }, /foo/)

    assert.end()
})
