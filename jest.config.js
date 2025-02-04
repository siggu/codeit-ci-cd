module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  collectCoverage: true, // 코드 커버리지 활성화
  coverageDirectory: 'coverage', // 커버리지 리포트 저장 위치
  collectCoverageFrom: ['src/**/*.js'], // 특정 폴더의 파일만 분석
  coverageReporters: ['json', 'lcov', 'text', 'clover'], // Codecov와 호환되는 형식 추가
};
