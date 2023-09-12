import { FC, memo } from 'react'

import { GridPanelBox } from './styledComponents'

const GridPanel: FC = () => <GridPanelBox />

const memoizedGridPanel = memo(GridPanel)

export default memoizedGridPanel
