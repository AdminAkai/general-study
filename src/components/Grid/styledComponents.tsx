import styled from 'styled-components'

export const MainGrid = styled.div<{ $gridPanels: number }>`
  padding: 128px;
  height: 100%;
  width: 100%;
  display: grid;
  background-color: ${({ theme }) => theme.priamry};
  grid-template-columns: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  grid-template-rows: ${({ $gridPanels }) => `repeat(${$gridPanels}, 1fr)`};
  gap: 4px;

  @media screen and (max-width: 700px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
  }
`
