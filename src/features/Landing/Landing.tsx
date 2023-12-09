import { FC } from 'react'

import { QuestionsAnswers } from './lib'
import {
  Answer,
  LandingPageContainer,
  Question,
  QuestionDivider,
  QuestionHeader,
  QuestionSection,
} from './styledComponents'

const Landing: FC = () => {
  return (
    <LandingPageContainer>
      {QuestionsAnswers.map(({ question, answer }) => (
        <QuestionSection>
          <QuestionHeader>
            <Question>{question}</Question>
            <QuestionDivider />
          </QuestionHeader>
          <Answer>{answer}</Answer>
        </QuestionSection>
      ))}
    </LandingPageContainer>
  )
}

export default Landing
