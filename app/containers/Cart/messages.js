/*
 * Cart Messages
 *
 * This contains all the text for the Cart container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.Cart";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Корзина",
  },
  summLabel: {
    id: `${scope}.label.summ`,
    defaultMessage: "Итого:",
  },
  summValue: {
    id: `${scope}.value.summ`,
    defaultMessage: "{value} руб.",
  },
  taxLabel: {
    id: `${scope}.label.tax`,
    defaultMessage: "Налог 5%:",
  },
  taxValue: {
    id: `${scope}.value.tax`,
    defaultMessage: "{value} руб.",
  },
  checkoutButton: {
    id: `${scope}.button.checkout`,
    defaultMessage: "Оформить заказ",
  },
  empty: {
    id: `${scope}.label.empty`,
    defaultMessage: "Корзина пустая",
  },
  emptyComment: {
    id: `${scope}.comment.empty`,
    defaultMessage:
      "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.",
  },
  returnButton: {
    id: `${scope}.button.return`,
    defaultMessage: "Вернуться назад",
  },
});
