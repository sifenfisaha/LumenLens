import React from "react";
import Section from "./Section";
import Button from "./Button";
import CallToAction from "./CallToAction";

const Hero: React.FC = () => {
  const image = ["/Rectangle 59.jpg", "Rectangle 65.jpg", "Rectangle 66.jpg"];
  return (
    <Section>
      <>
        <h1 className="font-bold text-4xl text-center max-w-4xl tracking-wide leading-relaxed">
          Write a captivating header here to engage your customers
        </h1>
        <Button />
        <div className="flex items-center justify-center gap-4 py-10 w-full flex-wrap">
          {image.map((src, i) => {
            return <img key={i} src={src} alt={`Image ${i}`} />;
          })}
        </div>
        <CallToAction />
      </>
    </Section>
  );
};

export default Hero;
