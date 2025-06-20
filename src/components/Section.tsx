import React, { type JSX } from "react";

interface Props {
  children: JSX.Element;
}

const Section: React.FC<Props> = ({ children }) => {
  return (
    <section className="text-white px-20 flex items-center justify-center flex-col py-10 ">
      {children}
    </section>
  );
};

export default Section;
