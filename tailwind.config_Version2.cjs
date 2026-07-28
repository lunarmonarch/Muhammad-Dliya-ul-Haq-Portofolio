module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B2545',
        accent: '#008489',
        amber: '#F59E0B'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif']
      }
    }
  },
  plugins: []
};