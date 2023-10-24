"use client";
import { useEffect, useState } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { Table } from "./table";
import { api } from "../pages/api";

function Page() {

  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Admin Panel</h1>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
}
export default Page;
