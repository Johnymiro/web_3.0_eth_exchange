import { Navbar, Welcome, Footer, Services, Transactions } from "../components";

export default () => {
  return (
    <>
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </>
  );
};
