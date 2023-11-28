import '@testing-library/jest-dom'

declare module '*.pdf' {
  const src: string
  export default src
}
