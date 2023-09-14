import styled, { css } from 'styled-components'

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

const glitchCopy = css`
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const glitchSteps = () => {
  const arrayOfSteps = []
  for (let i = 0; i++; i <= 20) {
    arrayOfSteps.push(`
      ${i * (1 / 20)} {
        clip: rect(random(100) + px, 9999px, random(100) + px, 0);
        transform: skew((random(100) / 100) + deg);
      }
    `)
  }
  return css`
    ${arrayOfSteps.join('')}
  `
}

export const LandingPageTitle = styled.h1`
  font-size: 8rem;
  color: ${({ theme }) => theme.Adminis};
  text-align: left;

  position: relative;

  @keyframes glitch-anim {
    ${glitchSteps()}
  }

  @keyframes glitch-anim2 {
    ${glitchSteps()}
  }

  &:before {
    ${glitchCopy}
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &:after {
    ${glitchCopy}
    left: -2px;
    text-shadow:
      -2px 0 #ff00c1,
      2px 2px #ff00c1;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
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
