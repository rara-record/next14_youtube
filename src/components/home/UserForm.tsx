"use client";

import axios from "axios";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        className="flex w-full gap-5 space-y-4 rounded-lg bg-white p-6 shadow-lg"
        onSubmit={handleSubmit(async (data) => {
          try {
            const result = await axios.post("/api/video", data);
            if (result.status === 200) {
              console.log(result);
              // 성공 케이스
              // toast.success("맛집을 등록했습니다.");
              // router.replace(`/stores/${result?.data?.id}`);
            } else {
              // 실패 케이스
              // toast.error("다시 시도해주세요");
            }
          } catch (e) {
            console.log(e);
            // toast.error("데이터 생성중 문제가 생겼습니다. 다시 시도해주세요.");
          }
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
    </>
  );
};

export default UserForm;
