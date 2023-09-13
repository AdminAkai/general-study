import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 600px) {
    padding: 24px;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const LandingPageLogo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    padding: 24px;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 24px;
  }
`

export const LandingPageTitle = styled.h1`
  font-size: 128px;
  color: ${({ theme }) => theme.Adminis};
  text-align: left;

  @media screen and (max-width: 700px) {
    font-size: 64px;
    text-align: center;
  }
`

export const LandingPageSubtext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
`

export const LandingPageSubtitle = styled.p`
  font-size: 48px;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  @media screen and (max-width: 700px) {
    font-size: 24px;
    text-align: center;
  }
`

export const LandingPageConstruction = styled.p`
  font-size: 32px;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  @media screen and (max-width: 700px) {
    font-size: 16px;
    text-align: center;
  }
`
