import { FC, PropsWithChildren } from 'react'

import { ProjectDescription } from './styledComponents'

const PanelDescription: FC<PropsWithChildren> = ({ children }) => (
  <ProjectDescription>{children}</ProjectDescription>
)

export default PanelDescription
