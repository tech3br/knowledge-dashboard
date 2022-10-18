import React from "react";
import { Container } from "./styles";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return <Container>{children}</Container>;
};
