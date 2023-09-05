module.exports = {
  "*.md": ["prettier --write"],
  "src/content/home/*.json": ["npx sort-json", "git add"],
  "(src|__mocks__)/**/*.js": [
    "eslint --fix",
    "prettier --write",
    "git add",
    "yarn test --bail --passWithNoTests --findRelatedTests",
  ],
  "package.json": ["fixpack", "git add"],
  "src/**/*.{css,scss}": ["stylelint --fix --allow-empty-input"],
};
