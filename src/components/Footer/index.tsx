import React from "react";
import Title from "../Title";

const Footer = (): JSX.Element => {
  return (
    <div className="component">
      <Title name="Footer" />
      <p className="seperated">
        <b>&lt;\&gt;</b> with <b>&lt;3</b> by Gökberk Akdeniz.
      </p>
    </div>
  );
};

export default Footer;
