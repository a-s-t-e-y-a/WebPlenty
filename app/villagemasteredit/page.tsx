'use client'
import { NavbarLogout } from "../components/navbarlogout";
import { Sidebar } from "../components/sidebar";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useEffect , useState} from "react";
import { api } from "../pages/api";
import toast, { Toaster } from "react-hot-toast";
export default function Page() {
    interface villageFormData {
        name: string;
    
        
        sectorId?: number | null;
      }
      type FormValue = {
        name: string
        // address: string;
        // mobileNumber: string;
        // dob: string;
        // religion: string;
        // gender: string;
        // previousParty?: string;
        SectorId: number;
        role: string;
      };
      
      async function Postvillage(data: villageFormData) {
        return api
          .post("/village", {
            ...data,
          })
          .then(function (response) {})
          .catch(function (error) {
            toast.error(error.response.data.message);
      
            console.log(error.response.data.message);
          });
      }
      
      const villageForm: React.FC<villageFormProps> = (props) => {
        const [info, setInfo] = useState<villageData>();
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
      
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm<FormValue>();
        const onSubmit: SubmitHandler<FormValue> = (data: any) => {
          postvillage(data);
        };
        async function postvillage(data: villageFormData) {
          console.log(data);
          return api
            .put(`/village/${info ? info.id : ""}`, {
              ...data,
            })
            .then(function (response) {
              toast(response.data.message, {
                icon: "👏",
                style: {
                  borderRadius: "10px",
                  background: "#333",
                  color: "#fff",
                },
              });
            })
            .catch(function (error) {
              toast.error(error.response.data.message);
            });
        }
        if (load) return <div> Load...</div>;
      
  return (
    <>
      <div className="w-[100vw]  z-10">
        <NavbarLogout />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <Toaster/>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl">Village Master Form</h1>
            <div className="flex flex-wrap -mx-3 mb-6 mt-5">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Village Name
                </label>
                <Controller
                  name="name"
                  control={control}
                  defaultValue="name"
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="village name"
                    />
                  )}
                />
                {errors.villageName && (
                  <p className="text-red-500 text-xs italic">
                    This field is required
                  </p>
                )}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Sector
                </label>
                <Controller
                  name="sector"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      type="text"
                      placeholder="Sector"
                    />
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
  );
}}
