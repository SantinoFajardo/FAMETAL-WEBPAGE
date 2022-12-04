import type { NextPage } from "next";
import About from "../components/about";
import Layout from "../components/layout/layout";
import Cookies from "universal-cookie";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="mt-20">
        <About />
      </div>
    </Layout>
  );
};

export default Home;
