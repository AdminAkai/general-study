import { FC, useEffect } from 'react'

import Grid from 'src/shared/components/Grid'
import GridPanel from 'src/shared/components/GridPanel'
import Adminis from 'src/shared/components/Adminis'
import PanelDescription from 'src/shared/components/PanelDescription'
import CustomLink from 'src/shared/components/CustomLink'
import ScrambleText from 'src/shared/components/ScrambleText'

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

const subtitle = 'Administrate you.'
const underConstruction = 'Under Construction (・-・)7'

const Landing: FC = () => {
  const dispatch = useAppDispatch()

  const githubRepos: any[] = useAppSelector(selectGithubRepos)

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
          <LandingPageSubtitle>
            <ScrambleText text={subtitle} />
          </LandingPageSubtitle>
          <LandingPageConstruction>
            <ScrambleText text={underConstruction} />
          </LandingPageConstruction>
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
