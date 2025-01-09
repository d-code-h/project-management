import React, { ReactNode } from "react";
import clsx from "clsx";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />
      <main className={clsx("flex w-full flex-col bg-gray-50 dark:bg-dark-bg")}>
        {/* Navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );
};

export default DashboardWrapper;
