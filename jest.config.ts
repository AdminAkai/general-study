import '@testing-library/jest-dom'
import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.config.ts'],
}
export default config
