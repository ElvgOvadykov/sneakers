/**
 *
 * CartItem
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";

import crossSvg from "@images/svg/cross.svg";

import "./styles.scss";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

import { SneakersPropTypes } from "@utils/propTypes";

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img width={70} height={70} src={props.cartItem.img} alt="Sneakers" />
      </div>
      <div className="cart-item__info">
        <h6>{props.cartItem.name}</h6>
        <b>
          <FormattedMessage
            {...messages.priceValue}
            values={{ value: props.cartItem.price }}
          />
        </b>
      </div>
      <button className="small-button" onClick={props.onRemoveItem}>
        <img src={crossSvg} alt="Delete" />
      </button>
    </div>
  );
}

CartItem.propTypes = {
  cartItem: SneakersPropTypes.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default memo(CartItem);
