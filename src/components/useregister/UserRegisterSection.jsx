import React from "react";

const UserRegisterSection = () => {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-[#236EDE]">
            Register
          </h2>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-lg shadow-md rounded-md p-10 bg-white">
          <form className="space-y-4" action="#" method="POST">
            <div>
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                autoComplete="given-name"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                name="LastName"
                id="LastName"
                autoComplete="family-name"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="new-password"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-900">
                Country
              </label>
              <select
                name="country"
                id="country"
                required
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Select a country</option>
                <option value="PK">Pakistan</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="IN">India</option>
                <option value="CA">Canada</option>
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                required
                placeholder="e.g. +92 300 1234567"
                className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="w-full rounded-md bg-[#236EDE] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterSection;
