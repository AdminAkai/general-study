import styled from 'styled-components'

export const MainGrid = styled.div<{ $gridPanels: number }>`
  padding: 8rem;
  height: 100%;
  width: 100%;
  display: grid;
  background-color: ${({ theme }) => theme.priamry};
  grid-template-columns: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  grid-template-rows: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  gap: 0.3rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`
