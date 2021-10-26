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

import {
  selectCartItems,
  selectCartSumm,
  selectCartVisible,
} from "./selectors";
import { removeItemFromCart, closeCart } from "./actions";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import { SneakersPropTypes } from "@utils/propTypes";
import injectSaga from "@utils/injectSaga";
import injectReducer from "@utils/injectReducer";

import "./styles.scss";
import CartItem from "@components/CartItem";

import rightArrowSvg from "@images/svg/rightArrow.svg";
import leftArrowSvg from "@images/svg/leftArrow.svg";
import crossSvg from "@images/svg/cross.svg";
import emptySvg from "@images/svg/empty.svg";

function Cart(props) {
  const tax = React.useMemo(() => Math.ceil(props.cartSumm * 0.05), [
    props.cartItems,
  ]);

  const isCartEmpty = React.useMemo(
    () => !props.cartItems || !props.cartItems.length,
    [props.cartItems]
  );

  const [isSuccess, setIsSuccess] = React.useState(false);

  function getCartEmptyInfo() {
    if (!isCartEmpty) {
      return null;
    }

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

  // function getOrderProcessedInfo() {
  //   if (!isSuccess) {
  //     return null;
  //   }

  //   return <div className="order-processed">заказ оформлен</div>;
  // }

  function getCartItems() {
    if (isCartEmpty || isSuccess) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="cart-items">
          {props.cartItems.map(cartItem => (
            <CartItem
              key={cartItem.id}
              name={cartItem.name}
              price={cartItem.price}
            />
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

  function getCartWrapperContent() {
    return (
      <React.Fragment>
        {getCartEmptyInfo()}
        {/* {getOrderProcessedInfo()} */}
        {getCartItems()}
      </React.Fragment>
    );
  }

  function closeCartHandler() {
    props.closeCart();
  }

  return (
    <React.Fragment>
      <div
        className={classNames("overlay", { overlay__open: props.visible })}
        onClick={closeCartHandler}
      />

      <div className={classNames("cart", { cart__open: props.visible })}>
        <div className="cart-wrapper">
          <h4>
            <FormattedMessage {...messages.header} />
            <button className="small-button" onClick={closeCartHandler}>
              <img src={crossSvg} alt="Close" />
            </button>
          </h4>
          {getCartWrapperContent()}
        </div>
      </div>
    </React.Fragment>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(SneakersPropTypes),
  cartSumm: PropTypes.number,
  removeItem: PropTypes.func,
  visible: PropTypes.bool,
  closeCart: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems(),
  cartSumm: selectCartSumm(),
  visible: selectCartVisible(),
});

const mapDispatchToProps = {
  removeItem: removeItemFromCart,
  closeCart,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "cart", reducer });
const withSaga = injectSaga({ key: "cart", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo
)(Cart);
