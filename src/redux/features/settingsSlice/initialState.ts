export enum Mode {
  DARK = 'darkTheme',
  LIGHT = 'lightTheme',
}

interface ISettingsInitialState {
  mode: Mode
}

const initialState: ISettingsInitialState = {
  mode: Mode.DARK,
}

export default initialState
