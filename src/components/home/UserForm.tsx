"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const fetchVideo = async () => {
  const { data } = await axios.get("/api/video");
  return data;
};

const UserForm = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["video"],
    queryFn: fetchVideo,
  });

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  console.log(data, "data");

  return (
    <>
      <form
        className="flex w-full gap-5 space-y-4 rounded-lg bg-white p-6 shadow-lg"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
        })}
      >
        <div className="w-full">
          <label
            htmlFor="url"
            className="block text-sm font-semibold text-gray-700"
          >
            URL
          </label>
          <input
            type="text"
            placeholder="Enter URL..."
            className="mt-1 w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            {...register("url", { required: true })}
          />
          {errors?.url?.type === "required" && (
            <p className="mt-2 text-sm text-red-600">This field is required.</p>
          )}
        </div>
        <button
          type="submit"
          className=" rounded-md bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
      <div>
        {data?.map((video) => (
          <div key={video.id} className="my-2">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/URBcer_Tf3I?si=d2jyCZ6rHf5bOd_s"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserForm;
