import Content from "components/templates/Content";
import Footer from "components/templates/Footer";
import Header from "components/templates/Header";
import Layout from "components/templates/Layout";
import Menu from "components/templates/Menu";

function Home() {
  return (
    <Layout>
      <Menu />
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
}

export default Home;
