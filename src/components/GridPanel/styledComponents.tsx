import styled from 'styled-components'

export const GridPanelBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  grid-area: input;
  grid-column: auto;
  grid-row: auto;
  place-self: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 4px ${({ theme }) => theme.Adminis};
    background-color: ${({ theme }) => theme.primary};
    transition: background-color 25ms ease-in-out;
  }
`
