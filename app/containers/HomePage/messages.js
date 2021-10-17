/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.containers.HomePage";

export default defineMessages({
  searchPlaceholder: {
    id: `${scope}.search_placeholder`,
    defaultMessage: "Поиск...",
  },
});
