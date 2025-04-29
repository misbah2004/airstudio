import React from "react";
import MapSection from "../map/MapSection";
import { FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { Globe, Phone } from "lucide-react";

const ContactUsSection = () => {
  return (
    <>
      <MapSection />
      <div className="w-full mt-5 px-4">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-5 p-5">          
          <div className="w-full lg:w-1/3 bg-white border border-[#00000040] shadow-sm px-6 py-20 h-[100%] space-y-7 rounded-md">
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 text-center sm:text-left">
              <div className="h-10 w-10 rounded-full border flex justify-center items-center text-[#236EDE] border-[#236EDE] mb-2 sm:mb-0">
                <Phone />
              </div>
              <h1 className="mr-8">
                <span>+012 345 678 102</span> <br />
                <span>+012 345 678 102</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 text-center sm:text-left">
              <div className="h-10 w-10 rounded-full border flex justify-center items-center text-[#236EDE] border-[#236EDE] mb-2 sm:mb-0">
                <Globe />
              </div>
              <h1>
                <span>yourname@email.com</span> <br />
                <span>yourwebsitename.com</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 text-center sm:text-left">
              <div className="h-10 w-10 rounded-full border flex justify-center items-center text-[#236EDE] border-[#236EDE] mb-2 sm:mb-0">
                <Globe />
              </div>
              <h1>
                <span>Address goes here,</span> <br />
                <span>street, Crossroad 123.</span>
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center pt-2">
              <h1 className="text-2xl font-semibold text-[#236EDE] mb-2">
                Follow Us
              </h1>
              <span className="flex space-x-3 text-2xl text-[#4D4D4D]">
                <FaInstagram />
                <FaTwitter />
              </span>
            </div>
          </div>
          <div className="w-full">
            <div className="isolate bg-white px-6 py-10 sm:py-12 border border-[#00000040] shadow-sm rounded-md">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#236EDE] ml-10 ">
                  Get In Touch
                </h2>
              </div>
              <form
                action="#"
                method="POST"
                className="mx-auto max-w-xl mt-10"
              >
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-2.5 block w-full rounded-sm bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#236EDE]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="mt-2.5 block w-full rounded-sm bg-white px-3.5 py-2 text-base text-gray-900 outline outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#236EDE]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5 flex rounded-sm bg-white outline  outline-gray-300 focus-within:outline-2 focus-within:outline-[#236EDE]">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="w-20 rounded-l-md py-2 pl-3 text-gray-500 focus:outline-none text-sm"
                      >
                        <option>US</option>
                        <option>CA</option>
                        <option>EU</option>
                      </select>
                      <input
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        className="w-full rounded-r-md px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                        placeholder="123-456-7890"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="mt-2.5 block w-full rounded-sm bg-white px-3.5 py-2 text-base text-gray-900 outline  outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-[#236EDE]"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <button 
                    type="submit"
                    className="inline-block rounded-full bg-[#236EDE] px-10 py-2.5 text-sm font-semibold text-white shadow-sm focus:outline-offset-2 focus:outline-indigo-600"
                  >
                   Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsSection;
