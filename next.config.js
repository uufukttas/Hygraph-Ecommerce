const nextConfig = {
  extends: ['next/core-web-vitals', 'turbo', 'prettier'],
  ignorePatterns: ['node_modules', 'dist'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}

module.exports = nextConfig

