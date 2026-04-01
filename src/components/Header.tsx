"use client";

import { Bell } from "lucide-react";
import Input from "./ui/Input";
import Avatar from "./ui/Avatar";
import Select from "./ui/Select";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <section>
        <span className="text-white font-bold text-2xl mr-4">Worcspace</span>
        <Select
          options={["Worcspace 1"]}
          className="text-white border rounded-xl p-0.5 pl-2 w-[9vw] cursor-pointer"
        />
      </section>
      <Input
        placeholder="Search..."
        className="border bg-zinc-200 rounded-sm p-0.5 pl-2 w-[20vw]"
      />
      <section className="flex items-center gap-4">
        <span>
          <Bell className="w-4 h-4 text-white cursor-pointer" />
        </span>
        <span>
          <Avatar firstName="Arunkumar" lastName="Mudakavi" />
        </span>
      </section>
    </header>
  );
};

export default Header;
