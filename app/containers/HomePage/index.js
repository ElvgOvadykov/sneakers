import React from "react";
import { FormattedMessage, injectIntl } from "react-intl";

import messages from "./messages";

import "./style.scss";

import SearchSvg from "@images/svg/search.svg";

import SneakersCard from "@components/SneakersCard/Loadable";

function HomePage(props) {
  const { intl } = props;

  const [sneakers, setSneakers] = React.useState([
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
    },
    {
      name: "Кроссовки Puma X Aka Boku Future Rider",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
  ]);

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
          {sneakers.map(item => (
            <SneakersCard name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default injectIntl(HomePage);
