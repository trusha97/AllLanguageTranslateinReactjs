import React from "react";
import LazyHeader from "../components/header"
const AppLayout = ({ children }) => {
  return (
    <>
      <LazyHeader />
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
