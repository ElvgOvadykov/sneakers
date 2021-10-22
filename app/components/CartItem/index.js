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

function CartItem(props) {
  const { name, price } = props;

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img width={70} height={70} src={sneakersImg} alt="Sneakers" />
      </div>
      <div className="cart-item__info">
        <h6>{name}</h6>
        <b>{price} руб.</b>
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
