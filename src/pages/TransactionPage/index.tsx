import React, {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "components/UI/Card";
import Arrow from "components/icons/Arrow";
import MainLayout from "components/UI/MainLayout";
import "./TransactionPage.scss";
import { Transaction, TransactionsCtx } from "context/TransactionsCtxProvider";
import { formatDate } from "utils/dates";

const TransactionPage: FC = (): ReactElement => {
  const { id } = useParams();
  const { getTransaction } = useContext(TransactionsCtx);
  const [transaction, setTransaction] = useState<Transaction>(null);
  useEffect(() => {
    const foundTransaction = getTransaction(id);
    setTransaction(foundTransaction);
  }, [id, getTransaction]);
  return (
    <MainLayout>
      <div className="transaction-page">
        <NavLink to="/" className="transaction-page__back-btn">
          <Arrow
            containerProps={{
              className: "transaction-page__back-btn_back-arrow",
            }}
          />
        </NavLink>
        {!transaction ? (
          <p className="transaction-page__subtitle">Transaction not found</p>
        ) : (
          <>
            {" "}
            <h1 className="transaction-page__value">${transaction.amount}</h1>
            <p className="transaction-page__subtitle">{transaction.name}</p>
            <p className="transaction-page__subtitle">
              {formatDate(new Date(transaction.date), true)}
            </p>
            <Card>
              <h4 className="transaction-page__title">
                Status: {transaction.pending ? "Pending" : "Approved"}
              </h4>
              <p className="transaction-page__desc">
                {transaction.description}
              </p>
              <hr className="transaction-page__divider" />
              <section className="transaction-page__total-block">
                <p className="transaction-page__total-block_text">Total</p>
                <p className="transaction-page__total-block_text">
                  ${transaction.amount}
                </p>
              </section>
            </Card>
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default TransactionPage;
