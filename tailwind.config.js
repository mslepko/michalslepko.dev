module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(17, 29, 44)',
        'gray': 'rgb(77, 89, 109)',
        'var_name': 'rgb(255, 123, 128)',
        'var_value': 'rgb(184, 246, 73)',
        'blue': '#235789',
        'light-blue': 'rgb(174, 241, 255)',
        'mint': '#f1faee',
        'purple': "rgb(232, 163, 236)",
        'dark': 'rgb(45, 49, 63)',
        'light-dark': 'rgb(17, 29, 44)',
        'header': 'rgb(90, 105, 137)'
      },
      minHeight: {
        '68': '68px',
      },
      maxWidth: {
        '90': '90px',
        '300': '300px',
      },
      maxHeight: {
        '90': '90px',
        '300': '300px',
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },

    },
  },
  plugins: [],
}

// Comment