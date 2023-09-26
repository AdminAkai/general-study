export enum Mode {
  DARK = 'darkTheme',
  LIGHT = 'lightTheme',
}

export enum Language {
  en = 'en',
  jp = 'jp',
}

interface ISettingsInitialState {
  mode: Mode
  language: Language
}

const initialState: ISettingsInitialState = {
  mode: Mode.DARK,
  language: Language.en,
}

export default initialState
