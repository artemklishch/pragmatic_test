import React, { FC, ReactElement, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Arrow from "components/icons/Arrow";
import "./TransactionItem.scss";
import { Transaction } from "context/TransactionsCtxProvider";
import { calculateDaysDifference, formatDate } from "utils/dates";
import { DAYS_NAMES, WEEK_DAYS_NUMBER } from "utils/constants";

interface Props {
  transaction: Transaction;
}
const TransactionItem: FC<Props> = ({ transaction }): ReactElement => {
  const date = useMemo(() => {
    if (!transaction?.date) {
      return null;
    }
    const date = new Date(transaction.date);
    const differenceInDays = calculateDaysDifference(date);
    if (differenceInDays <= WEEK_DAYS_NUMBER) {
      return DAYS_NAMES[date.getDay()];
    }
    return formatDate(date);
  }, [transaction]);
  return (
    <li className="transaction-item">
      <div className="transaction-item__item-wrapper">
        <img
          src={transaction.icon}
          alt={transaction.name}
          className="transaction-item__item-wrapper_icon"
        />
        <section className="item-content">
          <div className="item-content__header">
            <h4 className="item-content__header_title">{transaction.name}</h4>
            <div className="item-content__header_data">
              <span className="value">${transaction.amount}</span>
              <NavLink
                to={`/transaction/${transaction.id}`}
                className="arrow-button"
              >
                <Arrow />
              </NavLink>
            </div>
          </div>
          {transaction.pending ? (
            <p className="item-content__desc">
              Pending - {transaction.description}
            </p>
          ) : (
            <p className="item-content__desc">{transaction.description}</p>
          )}
          {transaction.auth_user ? (
            <p className="item-content__desc">
              {transaction.auth_user} - {date}
            </p>
          ) : (
            <p className="item-content__desc">{date}</p>
          )}
        </section>
      </div>
    </li>
  );
};

export default TransactionItem;
