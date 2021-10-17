/**
 *
 * TogglePlus
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import plusSvg from "@images/svg/plus.svg";
import checkSvg from "@images/svg/check.svg";
import classNames from "classnames";

import "./styles.scss";

function TogglePlus(props) {
  const { checked, onChange } = props;

  return (
    <button
      className={classNames("small-button", {
        "toggle-plus__checked": checked,
      })}
      type="button"
    >
      {checked ? (
        <img src={checkSvg} alt="Plus" />
      ) : (
        <img src={plusSvg} alt="Plus" />
      )}
    </button>
  );
}

TogglePlus.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

TogglePlus.defaultProps = {
  checked: false,
};

export default memo(TogglePlus);
