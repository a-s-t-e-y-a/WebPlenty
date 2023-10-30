"use client";
import { useForm } from "react-hook-form";
import { useState } from "react"; // Import useState from React
import toast from "react-hot-toast";
import api from "../pages/api";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  const handleFileChange = (event:any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e:any) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data:any) => {
    // Handle form submission here
    console.log(data);
    const formData = new FormData();
    if (data.image) {
      formData.append("image", data.image[0]);
    }
    return api
      .post("/gallery", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        toast.success(response.data.message, {
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
    <div className="h-screen font-sans text-gray-900 bg-gray-300 border-box">
      <div className="flex justify-center w-full mx-auto sm:max-w-lg">
        <div className="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
          <div className="mt-10 mb-10 text-center">
            {selectedImage && (
              <div className="mt-4">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-full rounded-lg"
                />
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-2">Upload your files</h2>
            <p className="text-xs text-gray-500">
              Files should be in the format .png .jpg
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner flex flex-col items-center justify-center"
          >
            <input
              type="file"
              id="file-upload"
              {...register("file")}
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="absolute w-full h-full border-solid border-indigo-400  border-2">
            <label
              htmlFor="file-upload"
              className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
            >
              <p className="z-10 text-xs font-light text-center text-gray-500">
                Drag & Drop your files here
              </p>
              <svg
                className="z-10 w-8 h-8 text-indigo-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z">
                </path>
              </svg>
            </label>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover-bg-indigo-700 text-white font-bold py-2 px-4 rounded absolute bottom-0"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
