/**
 * Modules
 */

var createEvent = require('@f/create-event')

/**
 * Expose triggerEvent
 */

module.exports = triggerEvent

/**
 * triggerEvent
 */

function triggerEvent (node, type, opts) {
  var e = createEvent(type, opts)
  node.dispatchEvent(e)
}
