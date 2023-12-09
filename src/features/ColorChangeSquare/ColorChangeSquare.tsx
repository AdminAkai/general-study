import { ChangeEventHandler, FC, ReactNode, useState } from 'react'
import {
  ColorChangeSquareContainer,
  ColorChangeSquareDescription,
  ColorChangeSquareHeader,
  ColorChangeSquareInfo,
  ColorChangeSquareMain,
  ColoredSquare,
  ColoredSquareTextInput,
} from './styledComponents'

const ColorChangeSquare: FC = (): ReactNode => {
  const [currentColor, setCurrentColor] = useState<string>('red')

  const handleChangeColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length <= 5) {
      setCurrentColor('red')
    } else if (e.target.value.length > 5 && e.target.value.length <= 10) {
      setCurrentColor('orange')
    } else if (e.target.value.length > 10 && e.target.value.length <= 15) {
      setCurrentColor('yellow')
    } else if (e.target.value.length > 15) {
      setCurrentColor('green')
    }
  }

  return (
    <ColorChangeSquareContainer>
      <ColorChangeSquareInfo>
        <ColorChangeSquareHeader>Color Change Square</ColorChangeSquareHeader>
        <ColorChangeSquareDescription>
          This square will change color depending on the length of the text you
          type!
        </ColorChangeSquareDescription>
      </ColorChangeSquareInfo>
      <ColorChangeSquareMain>
        <ColoredSquare $color={currentColor} />
        <ColoredSquareTextInput onChange={handleChangeColor} />
      </ColorChangeSquareMain>
    </ColorChangeSquareContainer>
  )
}

export default ColorChangeSquare
