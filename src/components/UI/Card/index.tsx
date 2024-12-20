import React, { FC, ReactElement, ReactNode } from "react";
import "./Card.scss";

interface Props {
  children: ReactNode;
}
const Card: FC<Props> = ({ children }): ReactElement => (
  <div className="card">{children}</div>
);

export default Card;
