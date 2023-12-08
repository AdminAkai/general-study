import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 var(--padding-huge);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: var(--spacing-extra-large);

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: 100vh;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: var(--spacing-small);
`

export const QuestionHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-small);
`

export const QuestionDivider = styled.div`
  width: 100%;
  border-bottom: 4px solid ${({ theme }) => theme.Adminis};
`
