/**
 *
 * Header
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

import cartSvg from "@images/svg/cart.svg";
import favoriteSvg from "@images/svg/favorite.svg";
import userSvg from "@images/svg/user.svg";
import logoPng from "@images/logo.png";

import "./styles.scss";

function Header(props) {
  return (
    <header>
      <div className="header-left">
        <img alt="Logo" width={40} height={40} src={logoPng} />
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
            <span className="cart-sum">
              <FormattedMessage
                {...messages.cartSummValue}
                values={{ value: props.cartSumm }}
              />
            </span>
          </li>
          <li>
            <img src={favoriteSvg} alt="favorite" />
          </li>
          <li>
            <img src={userSvg} alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  cartSumm: PropTypes.number,
};

export default memo(Header);
