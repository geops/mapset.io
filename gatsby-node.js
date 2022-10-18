const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.resolvableExtensions = () => ['.json'];

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const locales = require('./src/data/locales');
const region = process.env.GATSBY_REGION;

if (region == 'ch') {
  locales.de.default = true;
} else {
  locales.en.default = true;
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    deletePage(page);

    Object.keys(locales).forEach((key) => {
      const locale = locales[key].locale;
      const localizedPath = locales[key].default
        ? page.path
        : locales[key].path + page.path;
      const defaultLocale = Object.keys(locales).find(
        (key) => locales[key].default,
      );

      return createPage({
        ...page,
        localizedPath: localizedPath,
        context: { locale, region, defaultLocale },
      });
    });

    resolve();
  });
};
