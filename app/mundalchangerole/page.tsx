'use client'
'use client'
import { Toaster } from "react-hot-toast";
import { useForm, Controller } from "react-hook-form";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Your form submission logic here
    // You can use the data object to access form field values

    // Example using your API call (make sure to import `toast` and `api`):
    // api.post("/mundal", data)
    //   .then(function (response) {
    //     toast(response.data.message, {
    //       icon: "👏",
    //       style: {
    //         borderRadius: "10px",
    //         background: "#333",
    //         color: "#fff",
    //       },
    //     });
    //   });

    console.log(data);
  };

  return (
    <>
      <div className="w-[100vw] z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <Toaster />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Mundal Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Change Role
                </label>
                <Controller
                  name="role"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <select
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="karyakarta">karyakarta</option>
                      <option value="adhyaksha">adhyaksha</option>
                      <option value="koshadhyaksha">koshadhyaksha</option>
                      <option value="mahamantri">mahamantri</option>
                      <option value="mantri">mantri</option>
                      <option value="upaadhyaksha">upaadhyaksha</option>
                    </select>
                  )}
                />
              </div>
            </div>

            <button
              type="submit"
              className="appearance-none block w-full bg-orange-600 text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
        </>
    )
}
