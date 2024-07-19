/* eslint-disable @typescript-eslint/no-misused-promises */
import React from "react";

import Image from "next/image";

import { Button } from "@/components/Base";

import { logoutAction } from "./actions";
import { SidebarItem } from "./components";

/**
 * @param children Children content to be displayed inside the main template
 */
const MainTemplate: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-[281px] h-full shadow-md fixed">
        <div className="p-4">
          <div className="flex justify-center">
            <Image src="/svg/main-logo.svg" width={90} height={0} alt="Logo" />
          </div>
          <SidebarItem icon="dashboard">Dashboard</SidebarItem>
          <SidebarItem icon="overview">Overview</SidebarItem>
        </div>
      </div>
      <div className="flex flex-col ml-auto w-[calc(100%-281px)]">
        <div className="bg-white p-4 shadow-md sha">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-[18px]">
              Test DOT Indonesia - Made by Muhammad Zidane Al - Saadawi
            </h1>

            <form action={logoutAction}>
              <Button type="submit">Logout</Button>
            </form>
          </div>
        </div>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default MainTemplate;
