const tailwindTypography = await import('@tailwindcss/typography');

module.exports = {
    content: ["./src/**/!(node_modules)/**/*.{html,js,njk}",
              "./config/markdown/shortcodes/quotes/!(index).js"],
    theme: {
      extend: {},
    },
    plugins: [
      tailwindTypography,
    ],
    
  }