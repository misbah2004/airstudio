import React from "react";
import MapSection from "../map/MapSection";
import { FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { Globe, Phone } from "lucide-react";

const ContactUsSection = () => {
  return (
    <>
      <MapSection />
      <div className="w-full mt-5 ">
        <div className=" w-full flex justify-center space-x-3 p-5">
          <div className="w-full lg:w-1/3 bg-white shadow-xl px-6 py-10 space-y-7 rounded-2xl h-[600px] lg:[520px]">
            <div className="flex flex-col mt-[70px] sm:flex-row justify-center items-center sm:space-x-6 text-center sm:text-left">
              <div className="h-10 w-10 rounded-full border flex justify-center items-center text-[#236EDE] border-[#236EDE] mb-2 sm:mb-0">
                <Phone />
              </div>
              <h1>
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
              <h1 className="text-xl font-semibold text-[#236EDE] mb-2">
                Follow Us
              </h1>
              <span className="flex space-x-3 text-2xl text-[#236EDE]">
                <FaInstagram />
                <FaTwitter />
              </span>
            </div>
          </div>

          <div>
            <div className="isolate bg-white px-6 py-24 sm:py-18 lg:px-16 shadow-2xl">
              <div className="mx-auto max-w-2xl ">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#236EDE] sm:text-5xl">
                  Get In Touch
                </h2>
              </div>
              <form
                action="#"
                method="POST"
                className="mx-auto max-w-xl sm:mt-20"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone-number"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            aria-label="Country"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                          >
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                          </select>
                          <svg
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                          placeholder="123-456-7890"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block rounded-md bg-[#236EDE] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
