/**
 *
 * ToggleLike
 *
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import emptyHeartSvg from "@images/svg/emptyHeart.svg";
import filledHeartSvg from "@images/svg/filledHeart.svg";

import "./styles.scss";

function ToggleLike(props) {
  const { liked } = props;

  return (
    <button
      className={classNames("small-button", { "toggle-like__liked": liked })}
      type="button"
    >
      {liked ? (
        <img src={filledHeartSvg} alt="Like" />
      ) : (
        <img src={emptyHeartSvg} alt="Like" />
      )}
    </button>
  );
}

ToggleLike.propTypes = {
  liked: PropTypes.bool,
};

ToggleLike.defaultProps = {
  liked: false,
};

export default ToggleLike;
