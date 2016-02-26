
# trigger-event

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Modern, simple event triggering utility that works with more events than most other things out there.

## Installation

    $ npm install @f/trigger-event

## Usage

Use it to trigger synthetic events on elements. Particularly useful for testing.

```js
var trigger = require('@f/trigger-event')

function simulateClick (node) {
  trigger(node, 'click')
}
```

## API

### triggerEvent(node, type, opts)

- `node` - The DOM node you want to trigger the event on.
- `type` - The event type (e.g. `mouseover`, `click`, etc.)
- `opts` - Optional. Specify options to be passed to the particular event in question. E.g. `keycode`. If you want to know what properties are available for your particular event, consult [the documentation](https://developer.mozilla.org/en-US/docs/Web/Events).

**Returns:** `void`

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/trigger-event.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/trigger-event
[git-image]: https://img.shields.io/github/tag/micro-js/trigger-event.svg?style=flat-square
[git-url]: https://github.com/micro-js/trigger-event
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/trigger-event.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/trigger-event
