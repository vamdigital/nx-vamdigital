module.exports = {
  displayName: 'starter',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  collectCoverage: true,
  coverageReporters: ['html', 'text', 'lcov', 'json'],
  testPathIgnorePatterns: ['node_modules', 'public', 'coverage'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/starter',
}
