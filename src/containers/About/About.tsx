import { FC } from 'react'

import Grid from 'src/components/Grid'

import { GridItems } from './lib'
import { AboutContainer } from './styledComponents'

const About: FC = () => {
  return (
    <AboutContainer>
      <Grid gridItems={GridItems} />
    </AboutContainer>
  )
}

export default About
