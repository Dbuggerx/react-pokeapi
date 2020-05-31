import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "typeface-open-sans";
import "../src/styles.css";

addDecorator(withKnobs);
