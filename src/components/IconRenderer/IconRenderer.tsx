import { FC } from 'react'

import { useAppDispatch, useAppSelector } from 'src/redux/store'
import { selectMode } from 'src/redux/features/settingsSlice/selectors'
import { setMode } from 'src/redux/features/settingsSlice'
import { Mode } from 'src/redux/features/settingsSlice/initialState'

import { renderIcon } from './lib'
import { IconButton } from './styledComponents'

const IconRenderer: FC = () => {
  const dispatch = useAppDispatch()

  const mode: Mode = useAppSelector(selectMode)

  const handleChangeTheme = () => {
    if (mode === Mode.DARK) {
      dispatch(setMode(Mode.LIGHT))
    } else {
      dispatch(setMode(Mode.DARK))
    }
  }

  const CurrentIcon = renderIcon[mode]

  return (
    <IconButton onClick={handleChangeTheme}>
      <CurrentIcon mode={mode} />
    </IconButton>
  )
}

export default IconRenderer
