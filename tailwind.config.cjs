/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter,sans-serif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/galaxy.jpg')",
        "nlw-gradient":
          "linear-gradient(20.84deg, #9572fc 29.08%, #43e7ad 33.94%, #e1d55d 90.57%)",
        "button-gradient":
          "linear-gradient(50.84deg, #9572fc 2.08%, #43e7ad 33.94%, #e1d55d 92.57%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 65.08%)",
      },
    },
  },
  plugins: [],
};
