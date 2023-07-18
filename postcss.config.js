const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: [
      "./pages/*.tsx",
      "./pages/**/*.tsx",
      "./components/*.tsx",
      "./components/**/*.tsx",
    ],
    whitelistPatterns: [/^slick-/],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
