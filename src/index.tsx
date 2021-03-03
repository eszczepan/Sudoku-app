import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { unregister } from './core'
import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hello world</h1>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

unregister()
