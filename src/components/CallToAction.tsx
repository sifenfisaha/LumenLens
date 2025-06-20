import React from "react";
import Button from "./Button";

interface Props {
  title?: string;
  description?: string;
}

const CallToAction: React.FC<Props> = ({ description, title }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      {title && <h2 className="text-3xl font-bold my-10">{title}</h2>}
      <p className="text-center max-w-5xl">
        {description}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
        et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
        fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
        mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
        leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh,
        at maximus ante fermentum sit amet. Pellentesque commodo lacus at
        sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod
        erat placerat. In iaculis arcu eros, eget temp
      </p>
      <Button />
    </div>
  );
};
export default CallToAction;
