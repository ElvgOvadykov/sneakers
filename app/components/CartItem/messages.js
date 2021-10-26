/*
 * CartItem Messages
 *
 * This contains all the text for the Header component.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.CartItem";

export default defineMessages({
  priceValue: {
    id: `${scope}.value.price`,
    defaultMessage: "{value} руб.",
  },
});
