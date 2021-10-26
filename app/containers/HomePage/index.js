import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import classNames from "classnames";

import messages from "./messages";
import reducer from "./reducer";

import injectSaga from "@utils/injectSaga";
import injectReducer from "@utils/injectReducer";

import SneakersCard from "@components/SneakersCard/Loadable";

import { selectError, selectLoading, selectSneakers } from "./selectors";

import "./style.scss";

import SearchSvg from "@images/svg/search.svg";

function HomePage(props) {
  const { intl } = props;

  return (
    <div>
      <div className="content">
        <div className="content__header mb-3">
          <h1>
            <FormattedMessage {...messages.allSneakersLabel} />
          </h1>
          <div className="search-block">
            <img src={SearchSvg} alt="Search" />
            <input
              type="text"
              placeholder={intl.formatMessage({
                ...messages.searchPlaceholder,
              })}
            />
          </div>
        </div>

        <div className="content__sneakers">
          {props.sneakers.map(item => (
            <SneakersCard name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sneakers: selectSneakers(),
  isLoading: selectLoading(),
  error: selectError(),
});

const mapDispatchToProps = {};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "homePage", reducer });

export default compose(
  withConnect,
  withReducer,
  injectIntl
)(HomePage);
