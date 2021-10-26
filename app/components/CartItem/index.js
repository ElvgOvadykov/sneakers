/**
 *
 * CartItem
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";

import sneakersImg from "@images/testSneakers.png";
import crossSvg from "@images/svg/cross.svg";

import "./styles.scss";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

function CartItem(props) {
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img width={70} height={70} src={sneakersImg} alt="Sneakers" />
      </div>
      <div className="cart-item__info">
        <h6>{props.name}</h6>
        <b>
          <FormattedMessage
            {...messages.priceValue}
            values={{ value: props.price }}
          />
        </b>
      </div>
      <button className="small-button">
        <img src={crossSvg} alt="Delete" />
      </button>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default memo(CartItem);
