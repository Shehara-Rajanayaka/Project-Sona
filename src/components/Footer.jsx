import React from "react";
import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="w-full text-center bg-black border-t border-blue-gray-50 py-6">
      <Typography color="white" className="font-normal">
        &copy; Copy write @ 2023 | Vertex Help
      </Typography>
    </footer>
  );
};

export default Footer;
