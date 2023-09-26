import { FC, PropsWithChildren } from 'react'

import { ProjectDescription } from './styledComponents'

const PanelDescription: FC<PropsWithChildren> = ({ children }) => (
  <ProjectDescription aria-label='Project Description'>
    {children}
  </ProjectDescription>
)

export default PanelDescription
