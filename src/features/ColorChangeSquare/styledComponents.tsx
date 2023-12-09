import styled from 'styled-components'

export const ColorChangeSquareContainer = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const ColorChangeSquareHeader = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.Adminis};
`

export const ColorChangeSquareDescription = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.Adminis};
`

export const ColoredSquare = styled.div<{ $color: string }>`
  width: 100px;
  height: 100px;
  background-color: ${({ $color }) => $color};
`

export const ColoredSquareTextInput = styled.input`
  border-radius: 4px;
`

export const ColorChangeSquareInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const ColorChangeSquareMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`
