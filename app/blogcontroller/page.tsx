"use client";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import toast, { Toaster } from "react-hot-toast";
import { NavbarLogout } from "../components/navbarlogout";
import { useState, useEffect } from "react";
import api from "../pages/api";

export default function Page() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    await api
      .get("/blog")
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
  function onClickDelete(id: number) {
    const del = api
      .delete(`blog/${id}`)
      .then((response) => {
        toast(response.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(function (error) {
        toast.error(error.response.data.message);
        console.log(error.response.data.message);
      });
    console.log(del);
  }
  console.log(data);
  if (error) return <div>error..... !!!!!</div>;
  if (loading) return <div>loading....</div>;

  return (
    <>
      <div className="w-[100vw] z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Blog List</h1>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Sr.No.
                  </th>

                  <th scope="col" className="px-6 py-3">
                    Tittle
                  </th>


                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((info, index) => (
                <tr
                  key={info.id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{info.title}</td>
                  
                  <td className="px-6 py-4">
                    <Link
                      href={{
                        pathname: "../blogformedit",
                        query: {
                          data: JSON.stringify(info),
                        },
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Update
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => onClickDelete(info.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="my-10" />
        </div>
      </div>
    </>
  );
}
