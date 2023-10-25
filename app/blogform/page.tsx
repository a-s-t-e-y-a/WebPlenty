"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navbar } from "../components/navbar";
import { error } from "console";
import toast from "react-hot-toast";
import api from "../pages/api";

interface IFormInput {
  title: string; // Change "String" to "string" for lowercase data type
  content: string;
  image: any;
}

export default function Page() {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: any) => {
    console.log(data);
    const formData = new FormData();

    // Append each field to the FormData object
    for (const key in data) {
      formData.append(key, data[key]);
    }
    return api
      .post("/blog", formData,{
        headers:{
           'Content-Type': 'multipart/form-data'
        }
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
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-center font-bold text-2xl">Blog</h1>
      <hr></hr>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <div className="border border-dashed border-gray-500 relative">
            <input
              type="file"
              multiple
              className="cursor-pointer relative block opacity-0 w-full h-full p-20 z-50"
              {...register("image")}
            />
            <div className="text-center p-10 absolute top-0 right-0 left-0 m-auto">
              <h4>
                Drop files anywhere to upload
                <br />
                or
              </h4>
              <p className="">Select Files</p>
            </div>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="h-[10vh] w-[80vw] my-10 p-5 border-2 border-black"
            placeholder="heading"
            {...register("title", { required: "Title is required" })}
          />
        </div>
        <div>
          <textarea
            placeholder="main content"
            {...register("content", { required: "Content is required" })}
            className="h-[50vh] w-[80vw] my-3 p-5 border-2 border-black"
          />
        </div>
        <input
          type="submit"
          className="border-2 border-black w-[80vw] h-10"
          value="submit"
        />
      </form>
    </>
  );
}
