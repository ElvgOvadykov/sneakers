/**
 *
 * Header
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { connect } from "react-redux";

import { selectCartSumm } from "@containers/Cart/selectors";
import { openCart } from "@containers/Cart/actions";

import cartSvg from "@images/svg/cart.svg";
import favoriteSvg from "@images/svg/favorite.svg";
import userSvg from "@images/svg/user.svg";
import logoPng from "@images/logo.png";

import history from "@utils/history";

import "./styles.scss";

function Header(props) {
  function openCartHandler() {
    props.openCart();
  }

  function goToHomePageHandler() {
    history.push("/");
  }

  function goToBookmarksHandler() {
    history.push("/bookmarks");
  }

  return (
    <header>
      <div className="header-left" onClick={goToHomePageHandler}>
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
          <li onClick={openCartHandler}>
            <img src={cartSvg} alt="cart" />
            <span className="cart-sum">
              <FormattedMessage
                {...messages.cartSummValue}
                values={{ value: props.cartSumm }}
              />
            </span>
          </li>
          <li onClick={goToBookmarksHandler}>
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
  openCart: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartSumm: selectCartSumm(),
});

const mapDispatchToProps = {
  openCart,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(Header);
