/**
 * The Tailwind config file allows you to customize various aspects of the framework,
 *  such as color palettes, font families, spacing, breakpoints, and more. 
 * By modifying the Tailwind config file, 
 * you can create a custom set of CSS classes that matches your project's specific design requirements.
 */


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: "2rem"
    },
  },
  plugins: [],
}
