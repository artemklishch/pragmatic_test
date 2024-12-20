import Card from "components/UI/Card";
import React, { FC, ReactElement, useMemo } from "react";
import "./Header.scss";
import Mark from "components/icons/Mark";
import { MAX_CARD_LIMIT } from "utils/constants";
import { calculatePoints } from "utils/dates";

// DUMMY function to get balance value
const getBalance = () => {
  const balance = Math.trunc(Math.random() * 10000) / 100;
  if (balance <= 0 || MAX_CARD_LIMIT - balance <= 0) {
    return getBalance();
  }
  return balance;
};
const BALANCE = getBalance();

const Header: FC = (): ReactElement => {
  const availableAmount = MAX_CARD_LIMIT - BALANCE;
  const pointsNumber = useMemo(() => Math.round(calculatePoints()), []);
  return (
    <header className="header">
      <section className="header__section">
        <Card>
          <div className="card-wrapper">
            <h4 className="header__section_title">Card Balance</h4>
            <p className="header__section_value">${BALANCE}</p>
            <span className="header__section_total">
              ${availableAmount} Available
            </span>
          </div>
        </Card>
        <Card>
          <div className="card-wrapper">
            <h4 className="header__section_title">Daily Points</h4>
            <span className="header__section_total">
              {pointsNumber > 1000
                ? Math.round(pointsNumber / 100) + "K"
                : pointsNumber}
            </span>
          </div>
        </Card>
      </section>
      <Card>
        <h4 className="header__section_title">No Payment Due</h4>
        <span className="header__section_total">You've paid your balance.</span>
        <div className="header__circle">
          <Mark containerProps={{ className: "header__circle_icon" }} />
        </div>
      </Card>
    </header>
  );
};

export default Header;
