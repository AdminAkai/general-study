import styled from 'styled-components'

export const GridPanelBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.Adminis};
  font-size: 24px;
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

  @media screen and (max-width: 700px) {
    margin-top: 64px;
    width: 100%;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0;

    &:hover {
      box-shadow: none;
      background-color: none;
      transition: none;
    }
  }
`
