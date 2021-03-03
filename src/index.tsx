import React from 'react'
import ReactDOM from 'react-dom'

import { unregister } from './core'
import { GlobalStyles } from './styles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <h1>Hello world</h1>
  </>,
  document.getElementById('root')
)

unregister()
