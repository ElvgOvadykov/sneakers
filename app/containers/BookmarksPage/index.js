/**
 *
 * BookmarkPage
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { SneakersPropTypes } from "@utils/propTypes";

import {
  selectBootmarks,
  selectLoadingBootmarks,
  selectErrorBootmarks,
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

import CartItem from "@components/CartItem/Loadable";

import leftSvg from "@images/svg/left.svg";

import "./styles.scss";
import SneakersCard from "@components/SneakersCard";

export function BookmarksPage(props) {
  return (
    <div>
      <Helmet>
        <title>Закладки</title>
        <meta name="description" content="Description of BookmarkPage" />
      </Helmet>
      <div className="bookmarks">
        <h1>
          <button className="small-button">
            <h1>
              <img src={leftSvg} alt="back" />
            </h1>
          </button>
          <FormattedMessage {...messages.header} />
        </h1>
        <div className="bookmarks__items">
          {props.bootmarks.map(item => (
            <SneakersCard cartItem={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

BookmarksPage.propTypes = {
  bootmarks: PropTypes.arrayOf(SneakersPropTypes),
  isLoading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  bootmarks: selectBootmarks(),
  isLoading: selectLoadingBootmarks(),
  error: selectErrorBootmarks(),
});

const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(BookmarksPage);
