import React, { FC, ReactElement, useContext } from "react";
import Card from "components/UI/Card";
import "./Transactions.scss";
import TransactionItem from "./TransactionItem";
import { TransactionsCtx } from "context/TransactionsCtxProvider";

const Transactions: FC = (): ReactElement => {
  const { transactions } = useContext(TransactionsCtx);
  return (
    <main className="transactions">
      <h3 className="transactions__title">Lates Transactions</h3>
      <Card>
        <ul className="transactions__list">
          {transactions.map((t) => (
            <TransactionItem key={t.id} transaction={t} />
          ))}
        </ul>
      </Card>
    </main>
  );
};

export default Transactions;
