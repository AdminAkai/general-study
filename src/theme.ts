interface IColors {
  orange: '#fb7e14'
  black: '#000000'
  darkGray: '#151515'
  gray: '#292929'
  white: '#ffffff'
}

interface IThemeColors {
  primary: string
  nav: string
  navOption: string
  Adminis: string
  secondary: string
}

interface ITheme {
  lightTheme: IThemeColors
  darkTheme: IThemeColors
}

const colors: IColors = {
  orange: '#fb7e14',
  black: '#000000',
  darkGray: '#151515',
  gray: '#292929',
  white: '#ffffff',
}

const lightTheme: IThemeColors = {
  primary: colors.white,
  nav: colors.gray,
  navOption: colors.white,
  Adminis: colors.orange,
  secondary: colors.gray,
}

const darkTheme: IThemeColors = {
  primary: colors.gray,
  nav: colors.white,
  navOption: colors.gray,
  Adminis: colors.orange,
  secondary: colors.white,
}

const theme: ITheme = {
  lightTheme,
  darkTheme,
}

export default theme
