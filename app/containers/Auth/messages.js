/*
 * Auth Messages
 *
 * This contains all the text for the Auth container.
 */

import { defineMessages } from "react-intl";

export const scope = "app.containers.Auth";

export default defineMessages({
  loginButton: {
    id: `${scope}.button.login`,
    defaultMessage: "Войти",
  },
  loginLabel: {
    id: `${scope}.label.login`,
    defaultMessage: "Логин",
  },
  passwordLabel: {
    id: `${scope}.label.password`,
    defaultMessage: "Пароль",
  },
});
