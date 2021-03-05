import React, { FC } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useSelector, useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer, selectBlock } from 'reducers'
import { N, INDEX } from 'typings'

import { Container } from './styles'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  value: N
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
    isActive: selectedBlock
      ? (selectedBlock[0] === rowIndex && selectedBlock[1]) === colIndex
      : false,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]))
  }

  function moveUp() {
    console.log('Up')
  }

  function moveDown() {
    console.log('Down')
  }

  function moveLeft() {
    console.log('Left')
  }

  function moveRight() {
    console.log('Right')
  }

  useMousetrap('up', moveUp)
  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)

  return (
    <Container
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      active={state.isActive}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
