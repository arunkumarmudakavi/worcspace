"use client";

import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default HomeLayout;
