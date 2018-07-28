import React from "react";
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

const App = ({ apiroot }) => (
  <div>
    <Header />
    <Body apiroot={apiroot} />
    <Footer />
  </div>
);

export default App;
