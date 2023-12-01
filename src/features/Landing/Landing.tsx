import { FC } from 'react'

import {
  LandingPageConstruction,
  LandingPageContainer,
  LandingPageLogo,
  LandingPageSubtext,
  LandingPageSubtitle,
  LandingPageTitle,
} from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      <LandingPageLogo>
        <LandingPageTitle></LandingPageTitle>
        <LandingPageSubtext>
          <LandingPageSubtitle></LandingPageSubtitle>
          <LandingPageConstruction></LandingPageConstruction>
        </LandingPageSubtext>
      </LandingPageLogo>
    </LandingPageContainer>
  )
}

export default Landing
