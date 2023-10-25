"use client";
import { useEffect, useState } from "react";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { Table } from "./table";
import { api } from "../pages/api";
import { useRouter } from "next/navigation";

function Page() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/login");
    }
  }, []);
  async function fetchData() {
    await api
      .get("/poolingBooth")
      .then((info) => {
        setData(info.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  if (error) return <div>error..... !!!!!</div>;
  if (loading) return <div>loading....</div>;
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
            <h1 className="text-2xl font-extrabold mt-10">Booth Master</h1>
          </div>
          <Table data={data}></Table>
        </div>
      </div>
    </>
  );
}
export default Page;
