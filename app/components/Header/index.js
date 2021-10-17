/**
 *
 * Header
 *
 */

import React, { memo } from "react";

import { FormattedMessage } from "react-intl";
import messages from "./messages";

import cartSvg from "@images/svg/cart.svg";
import favorite from "@images/svg/favorite.svg";
import user from "@images/svg/user.svg";
import logo from "@images/logo.png";

import "./styles.scss";

function Header() {
  return (
    <header>
      <div className="header-left">
        <img alt="Logo" width={40} height={40} src={logo} />
        <div className="header-left-info">
          <h3>
            <FormattedMessage {...messages.projectName} />
          </h3>
          <p>
            <FormattedMessage {...messages.tagline} />
          </p>
        </div>
      </div>
      <div className="header-right">
        <ul>
          <li>
            <img src={cartSvg} alt="cart" />
            <span className="cart-sum">1206 руб.</span>
          </li>
          <li>
            <img src={favorite} alt="favorite" />
          </li>
          <li>
            <img src={user} alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default memo(Header);
