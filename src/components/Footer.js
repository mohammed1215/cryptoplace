import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="py-[15px] max-w-[80%] mx-auto text-center border-t mt-[50px]">
      Copyright @ {year}, Cryptoplace - All Right Reserved.
    </footer>
  );
};
