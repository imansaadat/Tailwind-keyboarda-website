/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Iran Sans Numeric']
      },
      colors: {
        'baseColor': '#324b6b',
        'grey': '#737373',
        'dark': '#4c4c4c',
        'black': '#1e272e',
        'hover': '#31455e',
        'light': '#ffffff',
        'blue': 'rgb(50, 75, 107) 0%',
        'darkBlue': 'rgb(11, 30, 95) 52%',
        'lightBlue': 'rgb(54, 163, 190) 100%',        
      },
      backgroundImage: {
        'skill': "url('/assets/images/base/index/skills-section/keyboarda-team-skills.png')",
        'consulting': "url('/assets/images/base/index/consultation-section/consultation.jpg')",
        'teamImg': "url('/assets/images/base/about-us/join-our-team.svg')",
      },
      animation: {
        fadeIn : 'fadeIn 0.5s linear',
      },
      keyframes:{
        fadeIn:{
          '0%':{
            opacity: '0',
            transform:' scale(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

