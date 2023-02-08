module.exports = {
  content: ['./index.html',"./src/**/*.{html,js}"],
  theme: {
    extend: {
       screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      },
      colors: {
        basitonGreen:"#0E563F",
        basitonGreenLight:"#85B839",
        basitonWhite:"#FFFFFF",
        basitonGray:"#0E563F0D"   
      },
      fontFamily: {
        'dmSans': ['DM Sans'],
        'heldisplay' :['Heldane Display']
      },
    },
  },
  plugins: [],
}