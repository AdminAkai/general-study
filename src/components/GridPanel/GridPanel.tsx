import { FC, memo, PropsWithChildren } from 'react'

import { GridPanelBox } from './styledComponents'

const GridPanel: FC<PropsWithChildren> = ({ children }) => (
  <GridPanelBox>{children}</GridPanelBox>
)

const memoizedGridPanel = memo(GridPanel)

export default memoizedGridPanel
