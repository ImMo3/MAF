module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
    './src/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}