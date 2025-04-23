import { ArrowUpFromLine } from "lucide-react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const RejisterComponentSection = () => {
  return (
    <div className="w-full flex justify-center items-cente mt-2">
      <div className=" gap-y-2 flex flex-col justify-center items-center p-5  border border-gray-200">
        <div className="w-full p-2 border border-gray-300 flex justify-between items-center">
          <p>1. Edit your account information</p>
          <span className="">
            <FaChevronDown />
          </span>
        </div>
        <div className="w-full p-2">
          <p>
            My Account Information <br />
            Your Personal Details
          </p>
          <span className="w-full h-[1px] mt-5 bg-gray-500 block"></span>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center">
          <img src="/assets/images/rejisterimg.png" alt="" />
          <button className="px-10 rounded-md bg-[#236EDE] p-1">
            <ArrowUpFromLine className="text-white" />
          </button>
        </div>
        <div className="w-full">
          <form action="">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="h-7 p-2 rounded-md border border-gray-400 w-xs"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="h-7 p-2 border rounded-md border-gray-400 w-xs"
                />
              </div>
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="">Email Address</label>
              <input
                type="text"
                className="h-7 p-2 border rounded-md border-gray-400 w-full"
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="">Password</label>
              <input
                type="text"
                className="h-7 p-2 border rounded-md border-gray-400 w-full"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="">Phone</label>
                <input
                  type="text  "
                  className="h-7 p-2 rounded-md border border-gray-400 w-xs"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Date Of Birth</label>
                <input
                  type="date"
                  className="p-2 h-7 border rounded-md border-gray-400 w-xs"
                />
              </div>
            </div>
              <div className="mt-2 flex justify-end">
                <button className="bg-[#236EDE] px-5 p-1 rounded-2xl ">Update</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RejisterComponentSection;
