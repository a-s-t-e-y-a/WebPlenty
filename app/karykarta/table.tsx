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
  function download(type) {
    const apiUrl =
      url === "/karykarta" ? `${url}?download=true` : `${url}&&download=true`;
  
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
      <div>
        <button
          onClick={() => download("Excel")}
          className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400"
        >
          PDF
        </button>
        <button
          onClick={() => download("Excel")}
          className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400"
        >
          Excel
        </button>
        <button className="px-4 py-2 border-2 mb-5 mx-2 rounded-lg border-gray-400">
          <Link
            className="w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="../form"
          >
            Add New Karykarta
          </Link>
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-800">
        <thead>
          <tr className="border-2 border-gray-500">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              S.no
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mobile Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date of Birth
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Religion
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Previous Party
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mundal ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Edit
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Delete Delete
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-800">
          {data.map((info: any, index: number) => (
            <tr key={info.id}>
              <td className="px-6 py-4 whitespace-nowrap text-xs">{index}</td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">{info.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.mobileNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.dob}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.religion}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.gender}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.previousParty ? info.previousParty : "None"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.mundal.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-xs">
                {info.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-2 border-red-300">
                <button>
                  <Pencil className="h-5 w-5" aria-hidden="true"></Pencil>
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-2 border-red-300">
                <button onClick={() => onClickDelete(info.id)}>
                  <Trash2 className="h-5 w-5" aria-hidden="true"></Trash2>
                </button>
              </td>
              <Toaster />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
