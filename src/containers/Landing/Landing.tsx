import { FC } from 'react'

import Navbar from 'src/components/Navbar'

import { LandingPageContainer } from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      <Navbar />
    </LandingPageContainer>
  )
}

export default Landing
