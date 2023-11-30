import { FC } from 'react'

import CustomLink from 'src/shared/components/CustomLink'
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
        <CustomLink to={url} ariaLabel={name} noUnderline>
          {name}
        </CustomLink>
        <PanelDescription>{description}</PanelDescription>
      </ProjectCardContainer>
    </GridPanel>
  )
}

export default ProjectCard
