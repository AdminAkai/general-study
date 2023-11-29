import { FC, useEffect } from 'react'

import { useHackerScramble } from 'src/shared/hooks/stringHooks'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'
import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'

import { fetchGithubReposStart } from './redux/landingActions'
import { selectGithubRepos } from './redux/landingSelectors'

import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'
import CustomLink from 'src/shared/components/CustomLink'

const Landing: FC = () => {
  const dispatch = useAppDispatch()

  const githubRepos: any[] = useAppSelector(selectGithubRepos)

  const subtitle = useHackerScramble('Administrate you.')
  const underConstruction = useHackerScramble('Under Construction (・-・)7')

  useEffect(() => {
    dispatch(fetchGithubReposStart())
  }, [])

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
      <Grid panels={githubRepos.length}>
        {githubRepos.length !== 0 &&
          githubRepos.map(({ name, description, url }, index) => (
            <GridPanel key={`${name}-${index}`}>
              <CustomLink to={url} ariaLabel={name}>
                {name}
              </CustomLink>
              <PanelDescription>{description}</PanelDescription>
            </GridPanel>
          ))}
      </Grid>
    </LandingPageContainer>
  )
}

export default Landing
