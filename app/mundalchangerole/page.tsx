'use client'
import { Toaster } from "react-hot-toast";
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const [info, setInfo] = useState<KarykartaData>();
  const [load, setLoad] = useState(true);
  const searchParams = useSearchParams();
  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      console.log(dataParam);
      setInfo(JSON.parse(dataParam));
      setLoad(false);
    }
  }, []);

  // const {
  //     control,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();
  //   const onSubmit = (data: any) => {
  //     return api
  //       .post("/mundal", {
  //         ...data,
  //       })
  //       .then(function (response) {
  //         toast(response.data.message, {
  //           icon: "👏",
  //           style: {
  //             borderRadius: "10px",
  //             background: "#333",
  //             color: "#fff",
  //           },
  //         });
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <Toaster />
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form className="w-full max-w-lg">
            <h1 className="text-2xl">Mundal Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Change Role
                </label>
                {
                  /* <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => ( */
                }

                <select className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>karyakarta</option>
                  <option>adhyaksha</option>
                  <option>koshadhyaksha</option>
                  <option>mahamantri</option>
                  <option>mantri</option>
                  <option>upaadhyaksha</option>
                </select>
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
  );
}
