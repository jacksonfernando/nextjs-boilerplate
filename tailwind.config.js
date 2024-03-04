/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        feed1: "url('/feed/feed1.JPG')",
        feed2: "url('/feed/feed2.JPG')",
        feed3: "url('/feed/feed3.JPG')",
        feed4: "url('/feed/feed4.JPG')"
      },
      width: {
        '98': '23rem',
        '100': '26rem',
        '120': '29rem',
        '140': '40rem'
      },
      height: {
        '100': '26rem',
        '120': '30rem',
        '140': '40rem'
      },
      colors: {
        'specta-primary': '#3b5999'
      },
      fontFamily: {
        roboto: ['var(--font-rubik)']
      },
      screens: {
        feed: '1700px'
      }
    },
  },
  plugins: [],
}
