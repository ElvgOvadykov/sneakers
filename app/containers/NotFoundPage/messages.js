/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.containers.NotFoundPage";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "Упс! Что-то пошло не так.",
  },
  notFoundMessage: {
    id: `${scope}.not_found_message`,
    defaultMessage: "Такой страницы не существует. Как вы её нашли? :)",
  },
  returnButton: {
    id: `${scope}.not_found_message`,
    defaultMessage: "Вернуться на главную",
  },
});
