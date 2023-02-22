module.exports = {
    
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(scss|sass|css)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  