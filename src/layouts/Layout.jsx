import { PropTypes } from 'prop-types';
import { useEffect } from "react";
import { useLocation } from "react-router";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};