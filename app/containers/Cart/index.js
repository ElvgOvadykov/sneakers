/**
 *
 * Cart
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import classNames from "classnames";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectCart from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import "./styles.scss";
import CartItem from "@components/CartItem";

import rightArrowSvg from "@images/svg/rightArrow.svg";
import leftArrowSvg from "@images/svg/leftArrow.svg";
import crossSvg from "@images/svg/cross.svg";
import emptySvg from "@images/svg/empty.svg";

export function Cart(props) {
  useInjectReducer({ key: "cart", reducer });
  useInjectSaga({ key: "cart", saga });

  const tax = React.useMemo(() => Math.ceil(props.cartSumm * 0.05), [
    props.cartItems,
  ]);

  const isCartEmpty = React.useMemo(
    () => !props.cartItems || !props.cartItems.length,
    [props.cartItems]
  );

  function getCartWrapperContent() {
    if (isCartEmpty) {
      return (
        <div className="cart-empty">
          <img src={emptySvg} alt="Empty" />
          <h5>
            <FormattedMessage {...messages.empty} />{" "}
          </h5>
          <span className="empty-comment">
            <FormattedMessage {...messages.emptyComment} />
          </span>
          <button className="big-button">
            <img src={leftArrowSvg} alt="Arrow" />
            <FormattedMessage {...messages.returnButton} />
          </button>
        </div>
      );
    }

    return (
      <React.Fragment>
        <div className="cart-items">
          {props.cartItems.map(cartItem => (
            <CartItem name={cartItem.name} price={cartItem.price} />
          ))}
        </div>
        <div className="cart-total-block">
          <ul>
            <li>
              <span>
                <FormattedMessage {...messages.summLabel} />
              </span>
              <div />
              <b>
                <FormattedMessage
                  {...messages.summValue}
                  values={{ value: props.cartSumm }}
                />
              </b>
            </li>
            <li>
              <span>
                <FormattedMessage {...messages.taxLabel} />
              </span>
              <div />
              <b>
                <FormattedMessage
                  {...messages.taxValue}
                  values={{ value: tax }}
                />
              </b>
            </li>
          </ul>
          <button className="big-button">
            <FormattedMessage {...messages.checkoutButton} />
            <img src={rightArrowSvg} />
          </button>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={classNames("overlay", { "d-none": !props.visible })}>
      <div className="cart">
        <div className="cart-wrapper">
          <h4>
            <FormattedMessage {...messages.header} />
            <button className="small-button">
              <img src={crossSvg} alt="Close" />
            </button>
          </h4>
          {getCartWrapperContent()}
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {
  visible: PropTypes.bool.isRequired,
  cartSumm: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart(),
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
)(Cart);
