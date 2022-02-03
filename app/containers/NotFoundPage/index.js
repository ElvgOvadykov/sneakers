/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from "react";
import { FormattedMessage } from "react-intl";
import history from "@utils/history";

import leftArrowSvg from "@images/svg/leftArrow.svg";

import messages from "./messages";
import "./style.scss";
import anxiousFaceWithSweat from "@images/anxious-face-with-sweat.png";

export default function NotFound() {
  return (
    <div className="not_found_page">
      <img width={70} height={70} src={anxiousFaceWithSweat} />
      <h5>
        <FormattedMessage {...messages.header} />
      </h5>
      <span className="not_found_page__comment">
        <FormattedMessage {...messages.notFoundMessage} />
      </span>
      <button className="big-button" onClick={() => history.push("/")}>
        <img src={leftArrowSvg} />
        <FormattedMessage {...messages.returnButton} />
      </button>
    </div>
  );
}
