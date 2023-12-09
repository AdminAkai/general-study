import styled from 'styled-components'

export const FizzBuzzContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 var(--padding-huge);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-extra-large);

  @media screen and (max-width: ${({ theme }) => theme.mobileMediaQuery}) {
    height: 100vh;
    padding: 1.5rem;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const FizzBuzzInput = styled.input`
  border-radius: 4px;
`

export const FizzBuzzSubmit = styled.button`
  border-radius: 4px;
  background: none;
  color: ${({ theme }) => theme.Adminis};
  border: 2px solid ${({ theme }) => theme.Adminis};
  padding: 8px 16px;
  outline: inherit;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: ${({ theme }) => theme.Adminis};
    color: ${({ theme }) => theme.primary};
  }
`
export const FizzBuzzHeader = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.Adminis};
  padding: 0;
  margin: 0;
`

export const FizzBuzzDisplay = styled.div`
  text-align: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.Adminis};
`
