import styled from 'styled-components'

export const MainGrid = styled.div<{ $gridPanels: number }>`
  padding: 8rem;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  grid-template-rows: ${({ $gridPanels }) => `repeat(${$gridPanels / 3}, 1fr)`};
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  gap: 1rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`
