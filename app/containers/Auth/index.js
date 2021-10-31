/**
 *
 * Auth
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectAuth from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import headerMessages from "@components/Header/messages";

import userSvg from "@images/svg/user.svg";
import lockSvg from "@images/svg/lock.svg";
import logoPng from "@images/logo.png";

import "./styles.scss";

export function Auth() {
  useInjectReducer({ key: "auth", reducer });
  useInjectSaga({ key: "auth", saga });

  return (
    <div>
      <Helmet>
        <title>Авторизация</title>
        <meta name="description" content="Description of Auth" />
      </Helmet>
      <div className="auth">
        <div className="auth__header">
          <img alt="Logo" width={40} height={40} src={logoPng} />
          <div>
            <h3>
              <FormattedMessage {...headerMessages.projectName} />
            </h3>
            <p>
              <FormattedMessage {...headerMessages.tagline} />
            </p>
          </div>
        </div>
        <form>
          <label for="login-field">
            <FormattedMessage {...messages.loginLabel} />
          </label>
          <div className="field-wrapper">
            <img src={userSvg} alt="Login" />
            <input className="field" type="text" id="login-field" />
          </div>
          <label for="password-field">
            <FormattedMessage {...messages.passwordLabel} />
          </label>
          <div className="field-wrapper">
            <img src={lockSvg} alt="Password" />
            <input className="field" type="password" id="password-field" />
          </div>
          <button type="submit" className="big-button">
            <FormattedMessage {...messages.loginButton} />
          </button>
        </form>
      </div>
    </div>
  );
}

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Auth);
