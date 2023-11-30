import { FC } from 'react'

import GridPanel from 'src/shared/components/GridPanel'
import PanelDescription from 'src/shared/components/PanelDescription'

import { ProjectCardContainer } from './styledComponents'

interface IProjectCardProps {
  name: string
  description: string
  url: string
}

const ProjectCard: FC<IProjectCardProps> = ({ name, description, url }) => {
  return (
    <GridPanel>
      <ProjectCardContainer href={url} target='_blank'>
        {name}
        <PanelDescription>{description}</PanelDescription>
      </ProjectCardContainer>
    </GridPanel>
  )
}

export default ProjectCard
