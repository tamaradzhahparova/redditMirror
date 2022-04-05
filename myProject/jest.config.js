module.exports = {
  preset: 'ts-jest',
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testEnvironment: 'node',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};