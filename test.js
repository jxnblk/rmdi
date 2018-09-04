import React from 'react'
import snapshot from '@compositor/kit-snapshot'
import * as icons from './'

const examples = Object.keys(icons)
  .map((name, _, names) => {
    const element = React.createElement(icons[name], (name === 'Icon') && { name: names[0] })
    return {
      name,
      element
    }
  })

snapshot(examples)