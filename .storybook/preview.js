import { addDecorator, addParameters } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { withPaddings } from "storybook-addon-paddings";
import "typeface-open-sans";
import "../src/styles.css";

addDecorator(withKnobs);
addDecorator(withPaddings);

addParameters({
  backgrounds: [{ name: "default", value: "#00aced", default: true }]
});

addParameters({
  paddings: [
    { name: "Small", value: "16px" },
    { name: "Medium", value: "32px", default: true },
    { name: "Large", value: "64px" }
  ]
});
