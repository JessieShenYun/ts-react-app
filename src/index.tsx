import React from 'react'
import ReactDom from 'react-dom'

import Hello from './demo/Hello'

ReactDom.render(
  <Hello name="TypeScript"/>,
  document.querySelector('.app')
)
