import { FC, useEffect, useMemo } from 'react'

import { useHackerScramble } from 'src/shared/hooks/stringHooks'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'

import { GridItems } from './lib'
import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'
import axios from 'axios'

const Landing: FC = () => {
  const subtitle = useHackerScramble('Administrate you.')
  const underConstruction = useHackerScramble('Under Construction (・-・)7')

  const allData = useMemo(() => {
    const fetchGithubRepos = async () => {
      const { data } = await axios.get(
        'https://api.github.com/users/AdminAkai/repos'
      )
      return data
    }

    fetchGithubRepos()
  }, [])

  console.log(allData)

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
