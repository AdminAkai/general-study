import { FC, useEffect } from 'react'
import { Style } from 'node_modules/react-loader-spinner/dist/type'

import { Grid as LoadingSpinner } from 'react-loader-spinner'

import Grid from 'src/shared/components/Grid'
import Adminis from 'src/shared/components/Adminis'
import ScrambleText from 'src/shared/components/ScrambleText'

import { useAppDispatch, useAppSelector } from 'src/shared/redux/store'

import { fetchGithubReposStart } from './redux/landingActions'
import {
  selectGithubRepos,
  selectLandingLoading,
} from './redux/landingSelectors'

import ProjectCard from './ProjectCard'

import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'
import { colors } from 'src/theme'

const subtitle = 'Administrate you.'
const underConstruction = 'Under Construction (・-・)7'

const loadingStyles: Style = {
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}

const Landing: FC = () => {
  const dispatch = useAppDispatch()

  const githubRepos: any[] = useAppSelector(selectGithubRepos)
  const loading: boolean = useAppSelector(selectLandingLoading)

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
      {loading ? (
        <LoadingSpinner
          color={colors.orange}
          wrapperStyle={loadingStyles}
          ariaLabel='landing page loading spinner'
        />
      ) : (
        <Grid panels={githubRepos.length}>
          {githubRepos.map((repo, index) => (
            <ProjectCard key={`${name}-${index}`} {...repo} />
          ))}
        </Grid>
      )}
    </LandingPageContainer>
  )
}

export default Landing
