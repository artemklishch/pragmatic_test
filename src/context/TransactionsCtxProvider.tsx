import React, {
  FC,
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import Transactions from "../storage/transactions.json";

export interface Transaction {
  id: number | string;
  type: string;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  auth_user: string | null;
  icon: string;
}
interface TransactionsContext {
  transactions: Transaction[];
  getTransaction: (id: string | number) => Transaction | undefined;
}
const initialState: TransactionsContext = {
  transactions: [],
  getTransaction: () => undefined,
};
export const TransactionsCtx = createContext(initialState);

interface Props {
  children: ReactNode;
}
const TransactionsCtxProvider: FC<Props> = ({ children }): ReactElement => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    setTransactions(Transactions as Transaction[]);
  }, []);
  const getTransaction = useCallback(
    (id: string | number) =>
      transactions.find((t) => +t.id === +id) as Transaction | undefined,
    [transactions]
  );

  const state = {
    transactions,
    getTransaction,
  };
  return (
    <TransactionsCtx.Provider value={state}>
      {children}
    </TransactionsCtx.Provider>
  );
};

export default TransactionsCtxProvider;
