"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import backbuttonimg from "../icons/backbutton.png";
import bjplogo from "../../images/bjplogo.jpg";
import modiyogi from "https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/modiyogi.png";
import toast, { Toaster } from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import { api } from "../pages/api";
export default function Page() {
  const { handleSubmit, control } = useForm();
  const handleFormSubmit = async (data: any) => {
    console.log(data);
   await api.post(
      "/user/",
      {
        ...data,
      },
    )
      .then((info) => {
        toast(info.data.message, {
          icon: "😎",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        toast(error.response.data.message, {
          icon: "😥",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section>
      {
        /* <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <Image
          src="https://shivam-practics-bucket.s3.ap-south-1.amazonaws.com/modiyogi.png"
          width={698}
          height={357}
            alt="Leader Image"
            className=""

          />
      </div> */
      }
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <Link href="./adminpanel">
            <div className="flex justify-end">
              <div>
                <Image
                  src={backbuttonimg}
                  alt="Go Back"
                  className="w-4 md:w-7 lg:7"
                />
              </div>
            </div>
          </Link>
          <div className="mb-2 flex justify-center">
            <Image src={bjplogo} className=" w-[50px] h-[50px]" alt="BJP" />
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Create New Admin
          </h2>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Name"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="text-base font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <Controller
                    name="phoneNumber"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Phone Number"
                      />
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="text-base font-medium text-gray-900"
                >
                  Date of Birth (DOB)
                </label>
                <div className="mt-2">
                  <Controller
                    name="dob"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        {...field}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="date"
                        placeholder="Date of Birth"
                      />
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="email"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          {...field}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                        />
                      )}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <Controller
                      name="password"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          {...field}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                        />
                      )}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-500 my-5"
                >
                  Create Admin
                  <ArrowRight className="ml-2" size={16} />
                </button>
                <Toaster />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
