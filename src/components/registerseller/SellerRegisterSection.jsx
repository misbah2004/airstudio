import React from "react";

const SellerRegisterSection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 p-10">
      <h1 className="text-[#FFB53F] text-xl">Rejister As Seller</h1>
      <div className=" w-3xl  mt-2 flex flex-wrap gap-4 p-10 rounded-md border border-gray-300">
        <div>
          <legend>First Name</legend>
          <input
            type="text"
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Last Name</legend>
          <input
            type="text"
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Email</legend>
          <input
            type="email"
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Password</legend>
          <input
            type="password"
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Phone Number</legend>
          <input
            type="text"
            placeholder="1(702) 123-4567"
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Date Of Birth</legend>
          <input
            type="date"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Store Name</legend>
          <input
            type="text"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Store Description</legend>
          <input
            type="text"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Street</legend>
          <input
            type="text"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>City</legend>
          <input
            type="text"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>State</legend>
          <input
            type="text"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div>
          <legend>Country</legend>
          <select
            className="w-xs border border-gray-300 rounded-sm p-1 mt-1"
            defaultValue=""
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="PK">Pakistan</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="IN">India</option>
            <option value="CA">Canada</option>
          </select>
        </div>
        <div>
          <legend>Zip Code</legend>
          <input
            type="text"
            placeholder=""
            className="w-xs border border-gray-300 rounded-sm p-1 "
          />
        </div>
        <div className="w-full flex justify-center mt-4">
          <button className="bg-[#FFA900] h-10 w-32 rounded-full text-white font-semibold">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerRegisterSection;
