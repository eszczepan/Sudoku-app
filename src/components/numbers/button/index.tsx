import React, { FC } from 'react'

import { Button } from 'components'
import { NUMBERS } from 'typings'

interface IProps {
  value: NUMBERS
}

const NumberButton: FC<IProps> = ({ value }) => {
  function fill() {
    console.log('fill', value)
  }
  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
