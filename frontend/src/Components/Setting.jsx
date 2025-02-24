import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faYoutube,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Setting(width) {
  const [isSiteControlChecked, setSiteControlChecked] = useState(true);
  const [is2FAEnabled, set2FAEnabled] = useState(true);
  useEffect(() => {
      if (width && window.innerWidth <= 1200) {
          const second_content = document.querySelector(".second_content");
          second_content.classList.add("setWidth");
      }
  }, []);
  return (
    <div className="bg-gray-200 second_content ml-3 mt-3 mr-3 p-3 rounded-md w-[80%] h-full">
      <div className="content">
        <h3 className="text-start mb-4 font-semibold text-sky-800">Settings</h3>
        <div className="setting-section grid grid-cols-6 gap-2">
          <div className="bg-white col-span-6 md:col-span-3 p-5 rounded-lg">
            <h2 className="text-xl text-start font-semibold">Site Control</h2>
            <p className="mb-5 text-start text-gray-500">
              Control The Website If There Is Maintenance
            </p>
            <div className="">
              <main>
                <h2 className="text-xl text-start font-semibold">
                  WebSite Control
                </h2>
                <p className="mb-5 text-start text-gray-500">
                  Open/Close Website And Type Reasons
                </p>
              </main>
              <div className="active"></div>
              <label>
                <input
                  type="checkbox"
                  checked={isSiteControlChecked}
                  onChange={() => setSiteControlChecked(!isSiteControlChecked)}
                  className="hidden"
                />
                <div className="toggle-switch"></div>
              </label>
            </div>
            <textarea
              className="rounded-lg focus:outline-none p-3 border border-gray-300 border-solid w-full"
              placeholder="Close Message Content"
              rows="5"
            ></textarea>
          </div>
          <div className="bg-white col-span-6 md:col-span-3 p-5 rounded-lg">
            <h2 className="text-xl text-start font-semibold">General Info</h2>
            <p className="mb-5 text-start text-gray-500">
              General Information About Your Account
            </p>
            <form>
              <div>
                <label
                  htmlFor="first"
                  className="block text-gray-500 text-start"
                >
                  First Name
                </label>
                <input
                  id="first"
                  name="first"
                  required
                  className="w-full p-3 rounded-lg mb-2 border-gray-300 border border-solid focus:outline-none"
                  type="text"
                  placeholder="First Name"
                  maxLength="20"
                  minLength="2"
                />
              </div>
              <div>
                <label
                  htmlFor="last"
                  className="block text-gray-500 text-start"
                >
                  Last Name
                </label>
                <input
                  id="last"
                  name="last"
                  required
                  className="w-full p-3 rounded-lg mb-2 border-gray-300 border border-solid focus:outline-none"
                  type="text"
                  placeholder="Last Name"
                  maxLength="20"
                  minLength="2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-start block text-gray-500"
                >
                  Email
                </label>
                <main className="flex justify-between items-center w-full">
                  <input
                    disabled
                    className="p-3 w-[80%] rounded-lg mb-5 border-gray-300 border border-solid focus:outline-none"
                    type="email"
                    placeholder="abdellahkarani@gmail.com"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    className="p-3 w-[18%] rounded-lg mb-5 bg-blue-500 text-white cursor-pointer border-none"
                  />
                </main>
              </div>
            </form>
          </div>
          <div className="bg-white col-span-6 md:col-span-3 p-5 rounded-lg">
            <h2 className="text-xl text-start font-semibold">Security Info</h2>
            <p className="mb-5 text-start text-gray-500">
              Security Info About Your Account
            </p>
            <div className="flex justify-between items-center mb-2">
              <div className="text-start">
                <h3 className="font-semibold text-lg">Password</h3>
                <p className="text-gray-500">Last Change In 2024/11/01</p>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded-lg">
                Change
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center my-2">
              <div className="text-start">
                <h3 className="font-semibold text-lg">
                  Two Factor Authentication
                </h3>
                <p className="text-gray-500">Enable/Disable The Feature</p>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded-lg">
                Change
              </button>
            </div>
            <hr />
            <div className="flex justify-between items-center mb-2">
              <div className="text-start">
                <h3 className="font-semibold text-lg">Device</h3>
                <p className="text-gray-500">Check The Login Device List</p>
              </div>
              <button className="bg-gray-300 text-zinc-700 p-2 rounded-lg">
                Change
              </button>
            </div>
          </div>
          <div className="bg-white col-span-6 md:col-span-3 p-5 rounded-lg">
            <h2 className="text-xl text-start font-semibold">Social Info</h2>
            <p className="mb-5 text-start text-gray-500">
              Social Media Information
            </p>
            <ul>
              <li className="flex items-center bg-gray-100 rounded-lg mb-2 p-3">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-gray-400 mr-2"
                ></FontAwesomeIcon>
                <input
                  className="flex-1 bg-transparent border-none outline-none"
                  type="text"
                  placeholder={`Linkedin Username`}
                />
              </li>
              <li className="flex items-center bg-gray-100 rounded-lg mb-2 p-3">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-gray-400 mr-2"
                ></FontAwesomeIcon>
                <input
                  className="flex-1 bg-transparent border-none outline-none"
                  type="text"
                  placeholder={`Twitter Username`}
                />
              </li>
              <li className="flex items-center bg-gray-100 rounded-lg mb-2 p-3">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-gray-400 mr-2"
                ></FontAwesomeIcon>
                <input
                  className="flex-1 bg-transparent border-none outline-none"
                  type="text"
                  placeholder={`Youtube Username`}
                />
              </li>
              <li className="flex items-center bg-gray-100 rounded-lg mb-2 p-3">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-gray-400 mr-2"
                ></FontAwesomeIcon>
                <input
                  className="flex-1 bg-transparent border-none outline-none"
                  type="text"
                  placeholder={`Github Username`}
                />
              </li>
            </ul>
          </div>
          <div className="bg-white col-span-6 md:col-span-3 p-5 rounded-lg">
            <h2 className="text-xl text-start font-semibold">Widget Control</h2>
            <p className="mb-5 text-start text-gray-500">
              Hide/Show Website Widget
            </p>
            {[
              "Quick Drafts",
              "Yearly Target",
              "Ticket Statistics",
              "Latest News",
              "Latest Tasks",
              "Top Search Item",
            ].map((item) => (
              <div key={item} className="flex items-center mb-1">
                <input type="checkbox" className="mr-3" />
                <label className="text-lg">{item}</label>
              </div>
            ))}
          </div>
          <div className="bg-white col-span-6 md:col-span-3 p-5 rounded-lg">
            <h2 className="text-xl text-start font-semibold">BackUp Manager</h2>
            <p className="mb-5 text-start text-gray-500">
              Control Backup Data And Location
            </p>enene
            {["Dally", "Weekly", "Monthly"].map((frequency) => (
              <div key={frequency} className="flex items-center mb-1">
                <input
                  type="radio"
                  name="backupFrequency"
                  id={frequency}
                  className="mr-3"
                />
                <label htmlFor={frequency} className="text-lg">
                  {frequency}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
