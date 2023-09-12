export enum Mode {
  DARK = 'darkTheme',
  LIGHT = 'lightTheme',
}

interface ISettingsInitialState {
  mode: string
}

const initialState: ISettingsInitialState = {
  mode: Mode.DARK,
}

export default initialState
