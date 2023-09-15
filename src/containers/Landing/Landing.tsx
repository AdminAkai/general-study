import { FC } from 'react'

import { useHackerScramble } from 'src/hooks/stringHooks'

import Grid from 'src/components/Grid'
import GridPanel from 'src/components/GridPanel'
import Adminis from 'src/components/Adminis'
import PanelDescription from 'src/components/PanelDescription'

import { GridItems } from './lib'
import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'

const Landing: FC = () => {
  const subtitle = useHackerScramble('Administrate you.')
  const underConstruction = useHackerScramble('Under Construction (・-・)7')

  return (
    <LandingPageContainer>
      <LandingPageLogo>
        <LandingPageTitle>
          <Adminis />
        </LandingPageTitle>
        <LandingPageSubtext>
          <LandingPageSubtitle>{subtitle}</LandingPageSubtitle>
          <LandingPageConstruction>{underConstruction}</LandingPageConstruction>
        </LandingPageSubtext>
      </LandingPageLogo>
      <Grid panels={GridItems.length}>
        {GridItems.map(({ name, description, props, Component }, index) => (
          <GridPanel key={`${name}-${index}`}>
            <Component {...props}>{name}</Component>
            <PanelDescription>{description}</PanelDescription>
          </GridPanel>
        ))}
      </Grid>
    </LandingPageContainer>
  )
}

export default Landing
