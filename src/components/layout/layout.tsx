import { NextPage } from "next";
import NavBar from "../navBar/navBar";

const Layout: any = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
