import React from 'react'
import snapshot from '@compositor/kit-snapshot'
import * as icons from './'

const examples = Object.keys(icons)
  .map(name => {
    const element = React.createElement(icons[name])
    return {
      name,
      element
    }
  })

snapshot(examples)