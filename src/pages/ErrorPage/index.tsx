import React, { FC, ReactElement } from "react";
import "./ErrorPage.scss";
import MainLayout from "components/UI/MainLayout";
import { NavLink } from "react-router-dom";

const ErrorPage: FC = (): ReactElement => (
  <MainLayout>
    <div className="error-page">
      <h2>Page not found</h2>
      <NavLink to="/">Go to the Home page</NavLink>
    </div>
  </MainLayout>
);

export default ErrorPage;
