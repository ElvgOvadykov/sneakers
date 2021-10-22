import React from "react";
import { injectIntl } from "react-intl";

import messages from "./messages";

import "./style.scss";

import SearchSvg from "@images/svg/search.svg";

import SneakersCard from "@components/SneakersCard/Loadable";
import Header from "@components/Header/Loadable";
import { Cart } from "@containers/Cart";

function HomePage(props) {
  const { intl } = props;

  const [sneakers, setSneakers] = React.useState([
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

  const [cartItems, setCartItems] = React.useState([
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
    },
    {
      name: "Мужские Кроссовки Nike Air Max 270",
      price: 8499,
    },
  ]);

  const cartSumm = React.useMemo(
    () =>
      cartItems.map(item => item.price).reduce((summ, value) => summ + value),
    [cartItems]
  );

  return (
    <div className="wrapper">
      <Cart cartItems={[]} cartSumm={cartSumm} visible={true} />
      <Header cartSumm={cartSumm} />
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
