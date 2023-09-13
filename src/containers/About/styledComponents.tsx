import styled from 'styled-components'

export const AboutContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 64px;
  padding-right: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};

  @media screen and (max-width: 700px) {
    padding: 24px;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export const AboutHeader = styled.h1`
  color: ${({ theme }) => theme.Adminis};
  margin-bottom: 24px;
  font-size: 56px;
`

export const AboutSummary = styled.section`
  text-align: left;
`

export const AboutSummaryHeader = styled.h3`
  color: ${({ theme }) => theme.Adminis};
  text-align: left;
`

export const AboutSummaryText = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 24px;
  text-align: left;
`

export const AboutResume = styled.a`
  &:after {
    display: block;
    content: '';
    border-bottom: 2px solid ${({ theme }) => theme.Adminis};
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
  font-size: 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.Adminis};
  text-align: right;
  font-style: normal;
  font-weight: 600;
  line-height: 22.923px;
`
