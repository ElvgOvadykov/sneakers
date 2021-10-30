import React, { memo } from "react";
import PropTypes, { bool } from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import classNames from "classnames";

import messages from "./messages";
import reducer from "./reducer";

import injectSaga from "@utils/injectSaga";
import injectReducer from "@utils/injectReducer";
import { SneakersPropTypes } from "@utils/propTypes";

import SneakersCard from "@components/SneakersCard/Loadable";

import { selectError, selectLoading, selectSneakers } from "./selectors";

import "./style.scss";

import SearchSvg from "@images/svg/search.svg";

function HomePage(props) {
  const { intl } = props;

  return (
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
          <SneakersCard cartItem={item} />
        ))}
      </div>
    </div>
  );
}

HomePage.propTypes = {
  sneakers: PropTypes.arrayOf(SneakersPropTypes),
  isLoading: PropTypes.bool,
  error: PropTypes.object,
};

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
