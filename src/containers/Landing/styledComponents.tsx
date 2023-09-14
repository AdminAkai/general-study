import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: 100vh;
    padding: 1.5rem;
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

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    padding: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1.5rem;
  }
`

export const LandingPageTitle = styled.h1`
  font-size: 8rem;
  color: ${({ theme }) => theme.Adminis};
  text-align: left;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.5rem solid ${({ theme }) => theme.Adminis}; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  letter-spacing: 0.5rem;
  animation:
    typing 1.5s steps(24, end),
    blink-caret 0.75s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${({ theme }) => theme.Adminis};
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 4rem;
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
  font-size: 3rem;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const LandingPageConstruction = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    font-size: 1rem;
    text-align: center;
  }
`
