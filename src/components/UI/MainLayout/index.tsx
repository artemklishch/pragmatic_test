import React, { FC, ReactElement, ReactNode } from "react";
import "./MainLayout.scss";

interface Props {
  children: ReactNode;
}
const MainLayout: FC<Props> = ({ children }): ReactElement => (
  <div className="main-layout">{children}</div>
);

export default MainLayout;
