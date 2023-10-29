import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { api } from "../pages/api";
import ClipLoader from "react-spinners/ClipLoader";
export function Table() {
  const [data, setData] = useState<Author []>();
  const [error, setError] = useState(null); // Changed to null to represent no error
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await api.get("/village");
      console.log(response)
      setData(response.data.data);
      setLoading(false);
    } catch (error: any) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;

  if (loading) return <div>Loding....</div>;

  function del(id: number) {
    if (window.confirm("क्या आप एडमिन को हटाना चाहते हैं?")) {
      api
        .delete(`village/${id}`)
        .then((response) => {
          toast(response.data.message, {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          fetchData(); // Reload data after successful deletion
        })
        .catch((error) => {
          console.error(error);
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link href="../villagemastersignup">Add New village</Link>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Sr.No.
              </th>

              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Sector
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
            {data?data.map((info:Author, index:number) => (
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
                <td className="px-6 py-4">{info.name}</td>
                <td className="px-6 py-4">{info.sector.name}</td>
                <td className="px-6 py-4">
                  <Link
                    href={{
                      pathname: "../villagemasteredit",
                      query: {
                        data: JSON.stringify(info),
                      },
                    }}
                  >
                    Update
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => del(info.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )):(<div>Loading ...</div>)}
          </tbody>
        </table>
        <Toaster />
      </div>
    </>
  );
}

interface Author {
  id: number;
  name: string;
  sector: Sector;
}

interface Sector {
  id: number;
  mundalId: number;
  name: string;
}

