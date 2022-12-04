import NavBar from "../navBar/navBar";
import Footer from "./Footer/footer";

const Layout: any = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
