import React from "react";
import { Avatar } from "@mui/material";
import "./innerSection.css";
import Post from "./post";
const InnerSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="container max-w-xl border-2 rounded-xl bg-[#fff] sm:mr-3">
        <div className="inner-search flex py-2 px-5 gap-2 items-center">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFBvia2Cs03Qw/profile-displayphoto-shrink_200_200/0/1618318553307?e=1668038400&v=beta&t=mpTz-yUgKxAwYrPmj1KVX1bj1V-ItcgQFeNiGTcHa1Y"
            sx={{ width: 64, height: 64 }}
          />
          <button
            type="text"
            className="rounded-full w-full h-14 border-2 border-inherit text-gray-800 text-start px-5 hover:bg-gray-100"
          >
            Start a post
          </button>
        </div>

        <div className="flex justify-center">
          <div className="flex items-center chote_mobile sm:px-5 md:px-2">
            <button className="flex px-2 py-4 gap-1 sm:gap-3 items-center rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="30"
                height="30"
                focusable="false"
              >
                <path
                  d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"
                  fill="#0064FF"
                ></path>
              </svg>
              Photo
            </button>
          </div>

          <div className="flex items-center chote_mobile sm:px-5 md:px-2">
            <button className="flex px-2 py-4 gap-1 sm:gap-3 items-center rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"
                  fill="#4CBB17"
                ></path>
              </svg>
              Video
            </button>
          </div>

          <div className="flex items-center chote_mobile sm:px-5 md:px-2">
            <button className="flex px-2 py-4 gap-1 sm:gap-3 items-center rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"
                  fill="#A020F0"
                ></path>
              </svg>
              Job
            </button>
          </div>

          <div className="flex items-center chote_mobile sm:px-5 md:px-2">
            <button className="flex px-2 py-4 gap-1 sm:gap-3 items-center rounded-lg hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"
                  fill="#FF4500"
                ></path>
              </svg>
              Write article
            </button>
          </div>
        </div>
      </div>

      
      <div >
        <Post
          name="umeed"
          description="full stack developer"
          message="he is such a good boy"
        />
      </div>
      <div >
        <Post
          name="umeed"
          description="full stack developer"
          message="he is such a good boy"
        />
      </div>
      <div >
        <Post
          name="umeed"
          description="full stack developer"
          message="he is such a good boy"
        />
      </div>
      <div >
        <Post
          name="umeed"
          description="full stack developer"
          message="he is such a good boy"
        />
      </div>
      <div >
        <Post
          name="umeed"
          description="full stack developer"
          message="he is such a good boy"
        />
      </div>
    </div>
  );
};

export default InnerSection;
