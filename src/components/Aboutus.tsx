import Section from "./Section";
import React from "react";
import CallToAction from "./CallToAction";

const Aboutus: React.FC = () => {
  return (
    <Section>
      <>
        <div className="grid md:grid-cols-2 gap-20">
          <div className="flex flex-col gap-10">
            <h2 className="text-2xl font-bold">
              Write a captivating header here to engage your customers
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              sunt earum provident dolor ex, ratione nobis non quisquam, fuga
              molestiae incidunt deleniti et? Ullam voluptates hic, natus dolore
              autem fuga? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Repellendus esse sit animi nihil. Necessitatibus quam quod
              earum ullam alias, ducimus at asperiores eligendi rem deserunt,
              molestiae obcaecati, illum consequuntur. Mollitia?
            </p>
          </div>
          <img src="/Rectangle 61.png" alt="ractange" />
        </div>
        <CallToAction title="Engage your customers"></CallToAction>
      </>
    </Section>
  );
};

export default Aboutus;
