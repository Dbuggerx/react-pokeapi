module.exports = {
  stories: ["../src/**/stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register"
  ]
};
