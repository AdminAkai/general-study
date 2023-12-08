import { FC } from 'react'

import {
  LandingPageContainer,
  QuestionDivider,
  QuestionHeader,
  QuestionSection,
} from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      <QuestionSection>
        <QuestionHeader>
          <h3>Question</h3>
          <QuestionDivider />
        </QuestionHeader>
        Answer
      </QuestionSection>
    </LandingPageContainer>
  )
}

export default Landing
