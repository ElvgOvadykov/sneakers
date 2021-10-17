import React, { useState } from "react";
import { injectIntl } from "react-intl";

import messages from "./messages";

import "./style.scss";

import SearchSvg from "@images/svg/search.svg";

import SneakersCard from "@components/SneakersCard/Loadable";
import Header from "@components/Header/Loadable";
import { Cart } from "@containers/Cart";

function HomePage(props) {
  const { intl } = props;

  const [sneakers, setSneakers] = useState([
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
    },
  ]);

  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <div className="content">
        <div className="content__header mb-3">
          <h1>Все кроссовки</h1>
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
