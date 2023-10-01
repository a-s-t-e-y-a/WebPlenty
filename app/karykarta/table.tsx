import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
export function TableData({ data, url }: { data: any; url: string }) {
  console.log(data);
  console.log(url);
  function onClickDelete(id: number) {
    const del = api
      .delete(`karykarta/${id}`)
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
  function download(type:string) {
    console.log(type)
    const apiUrl =
      url === "/karykarta" ? `${url}?download=true&&type=${type}` : `${url}&&download=true&&type=${type}`;
  
    api
      .get(apiUrl, { responseType: "blob" })
      .then((response) => {
        const disposition = response.headers["content-disposition"];
        let filename = `bjp__karykarta__${uuidv4()}`; // Default filename if not found in response headers
  
        if (disposition && disposition.indexOf("attachment") !== -1) {
          const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
            disposition
          );
          if (matches != null && matches[1]) {
            filename = matches[1].replace(/['"]/g, "");
          }
        }
  
        // Create a Blob object and initiate the download
        const blob = new Blob([response.data], { type: response.headers["content-type"] });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a); // append the element to the DOM
        a.click();
        a.remove(); // afterwards, remove the element
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={() => download("pdf")}
          className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400 text-sm"
        >
          PDF
        </button>
        <button
          onClick={() => download("Excel")}
          className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400 text-sm"
        >
          Excel
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link
            className="w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 text-sm"
            href="../form"
          >
            Add New Karykarta
          </Link>
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">
              S.no
            </th>
            <th className="px-6 py-3">
              ID
            </th>
            <th className="px-6 py-3">
              Name
            </th>
            <th className="px-6 py-3">
              Address
            </th>
            <th className="px-6 py-3">
              Mobile Number
            </th>
            <th className="px-6 py-3">
              Date of Birth
            </th>
            <th className="px-6 py-3">
              Religion
            </th>
            <th className="px-6 py-3">
              Gender
            </th>
            <th className="px-6 py-3">
              Previous Party
            </th>
            <th className="px-6 py-3">
              Mundal ID
            </th>
            <th className="px-6 py-3">
              Role
            </th>
            <th className="px-6 py-3">
              Edit
            </th>
            <th className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody >
          {data.map((info: any, index: number) => (
            <tr key={info.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-4">{index}</td>
              <td className="px-6 py-4">{info.id}</td>
              <td className="px-6 py-4">
                {info.name}
              </td>
              <td className="px-6 py-4">
                {info.address}
              </td>
              <td className="px-6 py-4">
                {info.mobileNumber}
              </td>
              <td className="px-6 py-4">  
                {info.dob}
              </td>
              <td className="px-6 py-4">
                {info.religion}
              </td>
              <td className="px-6 py-4">
                {info.gender}
              </td>
              <td className="px-6 py-4">
                {info.previousParty ? info.previousParty : "None"}
              </td>
              <td className="px-6 py-4">
                {info.mundal.name}
              </td>
              <td className="px-6 py-4">
                {info.role}
              </td>
              <td className="px-6 py-4 ">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <Link href="../karykartaformedit">Edit</Link>
              </a>
              </td>
              <td className="px-6 py-4 ">
                <button onClick={() => onClickDelete(info.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  Delete
                </button>
              </td>
              <Toaster />
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
