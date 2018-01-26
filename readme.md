# tina-immutable
> Immutable data for Tina.js

[![npm](https://img.shields.io/npm/v/@tinajs/tina-immutable.svg?style=flat-square)](https://www.npmjs.com/package/@tinajs/tina-immutable)
[![license](https://img.shields.io/github/license/tinajs/tina-immutable.svg?style=flat-square)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## Setup
1. Download package from npm
```bash
# ensure immutable is installed
npm i -save immutable@^4.0.0-rc.9

# install tina-immutable
npm i --save @tinajs/tina-immutable
```

2. Install into Tina
```javascript
// app.js
import Tina from '@tinajs/tina'
import ImmutablePlugin from '@tinajs/tina-immutable'

Tina.use(ImmutablePlugin)
```

## Usage
```javascript
// pages/some-page.js
import { Page } from '@tinajs/tina'
import { fromJS, Map } from 'immutable'

Page.define({
  data: {
    // The default values of data could be Immutable-Objects,
    books: fromJS([
      { id: 1, title: 'Black Beauty' },
      { id: 2, title: '20,000 Leagues Under the Sea' },
    ]),
    // or just any plain types.
    messages: [{
      { id: 1, content: 'I thought you might sway closer each day' },
      { id: 2, content: 'All I wish I could say but you shy away.' },
    }],
    isLoading: false,
    title: 'Favorites',
  },

  methods: {
    more () {
      let messages = this.data.get('messages')
      this.setData({
        messages: this.data.get('messages').push(new Map({
          id: 3,
          content: 'Our eyes engage but I can\'t see who\'s nearer.',
        }))
      })
    },
  },
})
```

```javascript
// components/like.js
import { Component } from '@tinajs/tina'
import { fromJS, Map } from 'immutable'

Component.define({
  properties: {
    // Limited by the offical Mina framkework, properties only accepts [plain types](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/custom-component/component.html).
    // However, our tina-immutable plugin will transform the values of all properties to Immutable, before they are merged into ``this.data``.
    item: Object,
  },
  data: {
    like: true,
  },

  methods: {
    toggle () {
      // You can use the properties as Immutable by accessing ``this.data``.
      this.triggerEvent('toggle', { item: this.data.get('item') })
    },
  },
})
```

## Example
[See ./example](example/readme.md)

## License
MIT &copy; [yelo](https://github.com/tinajs), 2017 - present
