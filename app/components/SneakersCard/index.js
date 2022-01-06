/**
 *
 * SneakersCard
 *
 */

import React from "react";
import PropTypes from "prop-types";

import { FormattedMessage } from "react-intl";
import messages from "./messages";

import TogglePlus from "@components/TogglePlus/Loadable";
import ToggleLike from "@components/ToggleLike/Loadable";

import "./styles.scss";

import { SneakersPropTypes } from "@utils/propTypes";

function SneakersCard(props) {
  const { name, price, img } = props.cartItem;

  return (
    <div className="card">
      <ToggleLike />
      <div className="card-image">
        <img width={133} height={112} src={img} alt="Sneakers" />
      </div>
      <h6>{name}</h6>
      <div className="card__bottom">
        <div className="card__bottom__info">
          <span>
            <FormattedMessage {...messages.price} />
          </span>
          <b>{price} руб.</b>
        </div>
        <TogglePlus />
      </div>
    </div>
  );
}

SneakersCard.propTypes = {
  cartItem: SneakersPropTypes.isRequired,
};

export default SneakersCard;
