import React from "react";

const Button: React.FC = () => {
  return (
    <button className="px-4 py-2 border-2 my-4 hover:bg-white hover:text-black transition duration-300 ease-in-out border-white rounded-full font-semibold cursor-pointer">
      Call to action
    </button>
  );
};

export default Button;
