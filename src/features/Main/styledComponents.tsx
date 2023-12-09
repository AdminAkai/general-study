import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  transition: background-color 0.3s ease;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    width: 100%;
    height: auto;
  }
`
