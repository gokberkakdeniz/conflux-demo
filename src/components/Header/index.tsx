import React from "react";
import Title from "../Title";

const Header = (): JSX.Element => {
  return (
    <header className="component">
      <Title name="Header" />
      <p className="seperated">
        ~ <b title="context">CON</b>
        <b title="flux">FLUX</b> ~
        <br />
        FLUX PATTERN USING REACT CONTEXT API
      </p>
    </header>
  );
};

export default Header;
