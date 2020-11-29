import React from 'react'
import ReactDom from 'react-dom'

// import Hello from './demo/Hello'
// import HelloClass from './demo/HelloClass'
// import HelloHoc from './demo/HelloHoc'
import HelloHoc from './demo/HelloHook'

ReactDom.render(
  <HelloHoc name="TypeScript" />,
  document.querySelector('.app')
)
