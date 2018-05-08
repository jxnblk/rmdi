import React from 'react'
import * as icons from '../lib'

const examples = Object.keys(icons)
  .map(name => ({
    name,
    element: React.createElement(icons[name], {})
  }))

export default examples
