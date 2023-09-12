import { FC } from 'react'

import GridPanel from 'src/components/GridPanel'

import { MainGrid } from './styledComponents'

const currentGrids = 4

const Grid: FC = () => {
  const allGrids = Array(currentGrids).fill(null)

  return (
    <MainGrid $gridPanels={Math.sqrt(currentGrids)}>
      {allGrids.map((_, index) => (
        <GridPanel key={index} />
      ))}
    </MainGrid>
  )
}

export default Grid
