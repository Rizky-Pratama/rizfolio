"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-stone-950 text-white border-b lg:border-b-0 lg:border-x border-white/20">
      <nav className="max-w-7xl mx-auto">
        <div className="lg:hidden flex justify-between items-center py-5 px-8 lg:px-32">
          <span className="flex">
            <Image src={"/logo.svg"} alt="Logo" width={32} height={32} />
            <h1 className="text-2xl font-bold">IZFOLIO</h1>
          </span>
          <FiMenu
            size={28}
            onClick={() => setOpen((e) => !e)}
            className="cursor-pointer"
          />
        </div>
        <Sidebar open={open} setOpen={setOpen} />
      </nav>
    </div>
  );
}

export default Navbar;
