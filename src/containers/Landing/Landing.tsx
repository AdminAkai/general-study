import { FC } from 'react'

import Grid from 'src/components/Grid'

import { GridItems } from './lib'
import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'
import GridPanel from 'src/components/GridPanel'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      <LandingPageLogo>
        <LandingPageTitle>Adminis</LandingPageTitle>
        <LandingPageSubtext>
          <LandingPageSubtitle>Administrate you.</LandingPageSubtitle>
          <LandingPageConstruction>
            Under Construction &nbsp;(・-・)7
          </LandingPageConstruction>
        </LandingPageSubtext>
      </LandingPageLogo>
      <Grid panels={GridItems.length}>
        {GridItems.map(({ name, props, Component }, index) => (
          <GridPanel key={`${name}-${index}`}>
            <Component {...props}>{name}</Component>
          </GridPanel>
        ))}
      </Grid>
    </LandingPageContainer>
  )
}

export default Landing
