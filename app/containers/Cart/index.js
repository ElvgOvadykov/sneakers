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

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectCart from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import "./styles.scss";
import CartItem from "@components/CartItem";

export function Cart() {
  useInjectReducer({ key: "cart", reducer });
  useInjectSaga({ key: "cart", saga });

  const [cartItems, setCartItems] = React.useState([
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 8499,
    },
  ]);

  const summ = React.useMemo(
    () =>
      cartItems.map(item => item.price).reduce((summ, value) => summ + value),
    [cartItems]
  );

  const tax = React.useMemo(
    () =>
      Math.ceil(
        cartItems
          .map(item => item.price)
          .reduce((summ, value) => summ + value) * 0.05
      ),
    [cartItems]
  );

  return (
    <div className="overlay">
      <div className="cart">
        <div className="cart-wrapper">
          <h4>
            <FormattedMessage {...messages.header} />
          </h4>
          <div className="cart-items">
            {cartItems.map(cartItem => (
              <CartItem name={cartItem.name} price={cartItem.price} />
            ))}
          </div>
          <ul className="cart-total-block">
            <li>
              <span>
                <FormattedMessage {...messages.summLabel} />
              </span>
              <div />
              <b>
                <FormattedMessage
                  {...messages.summValue}
                  values={{ value: summ }}
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
        </div>
      </div>
    </div>
  );
}

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
