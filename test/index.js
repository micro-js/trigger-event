/**
 * Imports
 */

var trigger = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  check(t, 'click')
  check(t, 'mouseover')
  check(t, 'animationend')
  check(t, 'wheel')
  check(t, 'resize', true)
})

/**
 * Helpers
 */

function $ (html) {
  document.body.innerHMTL = html
  return document.body.firstChild
}

function check (t, type, last) {
  var node = $('<div></div>')

  node.addEventListener(type, function () {
    t.pass()
    last && t.end()
  })

  trigger(node, type)
}
