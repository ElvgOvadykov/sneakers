/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from "react-intl";

export const scope = "app.components.Header";

export default defineMessages({
  projectName: {
    id: `${scope}.project_name`,
    defaultMessage: "React Sneakers",
  },
  tagline: {
    id: `${scope}.tegline`,
    defaultMessage: "Магазин лучших кроссовок",
  },
});
