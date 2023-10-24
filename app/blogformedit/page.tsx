'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import { Navbar } from "../components/navbar";

interface IFormInput {
  title: string; // Change "String" to "string" for lowercase data type
  content: string;
}

export default function Page() {
  const { register, handleSubmit } = useForm<IFormInput>();
  
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data); // Log the form data
  };

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-center font-bold text-2xl">Blog</h1>
      <hr></hr>
      <div className=" text-center">image upload feature</div>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            className="h-[10vh] w-[80vw] my-10 p-5  border-2 border-black	"
            placeholder="heading"
            {...register("title")}
          ></input>
        </div>
        <div>
          <textarea
            placeholder="main content"
            {...register("content")}
            className="h-[50vh] w-[80vw] my-3 p-5  border-2 border-black"
          ></textarea>
        </div>
        <input type="submit" className="border-2 border-black w-[80vw] h-10" value="submit" />
      </form>
    </>
  );
}