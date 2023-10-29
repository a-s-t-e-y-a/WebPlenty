"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import api from "../pages/api";
import image7 from "../../images/7.jpg";
import Link from "next/link";

export function Writting() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  async function fetchData() {
    await api
      .get("/blog")
      .then((info: any) => {
        console.log(data);
        setData(info.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  if (error) return <div>error..... !!!!!</div>;
  if (loading) return <div>loading....</div>;

  return (
    <>
      <div className="mx-auto  w-full max-w-7xl items-center space-y-4 px-2 py-10 md:space-y-0  flex flex-wrap gap-5">
       
          {data.map((info:any, index:any) => (
            <>
             <div className="relative aspect-[1/1]  w-auto rounded-md    md:h-[400px]">
              <div className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
                <Image
                  src={`${info.image}`}
                  width={1280}
                  height={960}
                  alt="Kanya Sumangla scheme"
                  className="z-0 h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <h1 className="text-lg font-semibold text-white">
                    {info.title}
                  </h1>

                  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    <Link className="" href={{
                      pathname: "../blog",
                      query: {
                        data: JSON.stringify(info),
                      },
                    }}>
                      Read More →
                    </Link>
                  </button>
                </div>
              </div>
              </div>
            </>
          ))}
      
      </div>
    </>
  );
}