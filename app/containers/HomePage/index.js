import React, { memo } from "react";
import PropTypes, { bool } from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import messages from "./messages";
import reducer from "./reducer";
import saga from "./saga";

import injectSaga from "@utils/injectSaga";
import injectReducer from "@utils/injectReducer";
import { SneakersPropTypes } from "@utils/propTypes";

import SneakersCard from "@components/SneakersCard/Loadable";

import { selectError, selectLoading, selectSneakers } from "./selectors";
import { sneakersLoadRequest } from "./actions";

import "./style.scss";

import SearchSvg from "@images/svg/search.svg";

function HomePage(props) {
  const { intl } = props;

  React.useEffect(() => {
    props.sneakersLoad({ pageIndex: 1, pageSize: 5 });
  }, []);

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
  sneakersLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  sneakers: selectSneakers(),
  isLoading: selectLoading(),
  error: selectError(),
});

const mapDispatchToProps = {
  sneakersLoad: sneakersLoadRequest,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "homePage", reducer });
const withSaga = injectSaga({ key: "homePage", saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
  injectIntl
)(HomePage);
