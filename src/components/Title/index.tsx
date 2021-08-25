import React from "react";

interface TitleProps {
  name: string;
}

const Title = ({ name }: TitleProps): JSX.Element => {
  const now = Date.now();

  console.log(now, `${name} rerender`);

  return (
    <>
      <span className="name">{name}</span> <span className="now">{now}</span>
    </>
  );
};

export default Title;
