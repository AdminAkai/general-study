import styled from 'styled-components'

export const ChangelogContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    padding: 1.5rem;
    height: auto;
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

export const ChangelogHeader = styled.h1`
  color: ${({ theme }) => theme.Adminis};
  font-size: 3.5rem;
  margin: 0;
`

export const ChangelogSubtitle = styled.h3`
  color: ${({ theme }) => theme.secondary};
  text-align: left;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`

export const AboutSummary = styled.section`
  text-align: left;
`

export const ChangelogBulletPoint = styled.p`
  color: ${({ theme }) => theme.secondary};
  text-align: left;
`

export const AboutResume = styled.a`
  &:after {
    display: block;
    content: '';
    border-bottom: 0.13rem solid ${({ theme }) => theme.Adminis};
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
  font-size: 1.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.Adminis};
  text-align: right;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4375rem;
`
