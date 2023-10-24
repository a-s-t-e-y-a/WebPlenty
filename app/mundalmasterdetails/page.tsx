import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Sidebar } from "../components/sidebar";
import { Toaster } from "react-hot-toast";
import { NavbarLogout } from "../components/navbarlogout";

export default function Page() {
  const data = []; // Replace with your actual data

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
            <h1 className="text-2xl font-extrabold mt-10">Mundal Name</h1>
          </div>
          {/* <div className="flex justify-center">
        
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
            className="w-full h-full text-black transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
            href="../mundalmasterform"
          >
            Add New Mundal
          </Link>
        </button>
      </div> */}
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
                Role
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
            {/* {data.map((info: any, index: number) => ( */}
              <tr
                // key={info.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {/* {index + 1} */}
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">
                  <Link
                    href="../mundalmasterformedit"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Update
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    // onClick={() => del(info.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button  >
                </td>
              </tr>
            {/* ))} */}
            <Toaster />
          </tbody>
        </table>
      </div>

       
      <hr className="my-10"></hr>
      <div className="flex justify-center">
            <h1 className="text-2xl font-extrabold mt-10">Sector</h1>
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
                Action
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
       
              <tr
                // key={info.id}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {/* {index + 1} */}
                </th>
                <td className="px-6 py-4"></td>
               
                <td className="px-6 py-4">
                  <Link
                    href="../mundalmasterformedit"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Update
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <button
                    // onClick={() => del(info.id)}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button  >
                </td>
              </tr>
           
            <Toaster />
          </tbody>
        </table>
      </div>

      </div>
      </div>
    </>
      
  );
}
