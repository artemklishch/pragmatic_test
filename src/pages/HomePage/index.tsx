import React, { FC, ReactElement } from "react";
import MainLayout from "../../components/UI/MainLayout";
import Header from "./Header";
import Transactions from "./Transactions";

const HomePage: FC = (): ReactElement => (
  <MainLayout>
    <Header />
    <Transactions />
  </MainLayout>
);

export default HomePage;
