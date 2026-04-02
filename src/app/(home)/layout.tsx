"use client";

import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[80vh]">
        <Sidebar />
        <main className="flex-1 min-w-0 p-2">{children}</main>
      </div>
    </>
  );
};

export default HomeLayout;
