module.exports = {
  stories: ["../src/**/stories.tsx"],
  addons: [
    {
      name: "@storybook/preset-create-react-app",
      options: {
        tsDocgenLoaderOptions: {}
      }
    },
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    },
    "@storybook/addon-actions",
    "@storybook/addon-links"
  ]
};
