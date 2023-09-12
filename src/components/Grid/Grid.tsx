import { FC } from 'react'

import { GridItemsType } from 'src/types'

import GridPanel from 'src/components/GridPanel'
import CustomLink from 'src/components/CustomLink'

import { MainGrid } from './styledComponents'

interface IGridProps {
  gridItems: GridItemsType
}

const Grid: FC<IGridProps> = ({ gridItems }) => {
  return (
    <MainGrid $gridPanels={Math.sqrt(gridItems.length)}>
      {gridItems.map(({ name, route }, index) => (
        <GridPanel key={`${name}-${index}`}>
          <CustomLink to={route}>{name}</CustomLink>
        </GridPanel>
      ))}
    </MainGrid>
  )
}

export default Grid
