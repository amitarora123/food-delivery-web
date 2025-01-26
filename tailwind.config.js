/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellowText: '#FFB800',
        primary: '#FFB30E',
        primaryDaner: '#F17228',
        bgSoftDanger: '#fdeadf',
        success: 'rgb(121, 185, 60)',
        softSuccess: 'rgb(235, 245, 226)',
      },
      boxShadow: {
        custom: '0 5px 10px 0 #FFAE0033, 0 20px 40px 0 #FFAE004A', // Define your custom shadow
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'], // Add the Sora font
        sourceSansPro: ['SourceSans3', 'Sora'],
        sourceSansProSemiBold: ['SourceSans3-semibold', 'Times-new-roman'],
        sourceSansProBold: ['SourceSans3-bold', 'Times-new-roman'],
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(180deg, rgba(255, 206, 103, 0.22) -42.47%, rgba(253, 237, 202, 0) 100%)',
        'app-features': "url('/assets/background/cta-one-bg.png')",
        'bottom-background': "url('/assets/background/cta-two-bg.png')",
      },
    },
    container: {
      center: true, // Centers the container
      padding: '1rem', // Default horizontal padding
      screens: {
        sm: '600px', // Custom width for small screens
        md: '700px', // Custom width for medium screens
        lg: '1000px', // Custom width for large screens
        xl: '1200px', // Custom width for extra-large screens
        '2xl': '1536px', // Custom width for 2xl screens
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        p: {
          color: 'rgb(66, 66, 66)',
        },
      });
    },
  ],
};
