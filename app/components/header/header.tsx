import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="h-15 border-slate-900/10 border-b-2 flex items-center justify-between px-4">
      <Image
        src="/logo.png"
        alt="web-logo"
        width={80}
        height={20}
      />
      <div className="font-semibold">
        <ul className="flex gap-3.5 text-slate-500">
          <li className="hover:text-slate-950 cursor-pointer">Home</li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="#about-us">About us</a>
          </li>
          <li className="hover:text-slate-950 cursor-pointer"> <a href="mailto:wasayriirus@gmail.com">Contact</a></li>
          <li className="hover:text-slate-950 cursor-pointer">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
