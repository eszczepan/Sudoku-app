import React from 'react'
import ReactDOM from 'react-dom'

import { unregister } from './core'

ReactDOM.render(<h1>Hello world</h1>, document.getElementById('root'))

unregister()
