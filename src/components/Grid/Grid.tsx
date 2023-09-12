import { FC } from 'react'

import GridPanel from 'src/components/GridPanel'
import CustomLink from 'src/components/CustomLink'

import { GridItems } from './lib'
import { MainGrid } from './styledComponents'

const Grid: FC = () => {
  return (
    <MainGrid $gridPanels={Math.sqrt(GridItems.length)}>
      {GridItems.map(({ name, route }, index) => (
        <GridPanel key={`${name}-${index}`}>
          <CustomLink to={route}>{name}</CustomLink>
        </GridPanel>
      ))}
    </MainGrid>
  )
}

export default Grid
