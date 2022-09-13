import React from "react";
import { Avatar } from "@mui/material";

const LeftSidebar = () => {
  return (
    <div className="container rounded-xl bg-[#fff] border-2 md:mx-2 md:max-w-xs">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E16AQFTJgWygn5h0Q/profile-displaybackgroundimage-shrink_200_800/0/1661418944474?e=1668038400&v=beta&t=eyBJhE-RuCxSJiwQmaNQWXtwIJfj_Ar9juaHkBTeJAs"
          alt=""
          className="relative rounded-lg"
        />
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQFBvia2Cs03Qw/profile-displayphoto-shrink_200_200/0/1618318553307?e=1668038400&v=beta&t=mpTz-yUgKxAwYrPmj1KVX1bj1V-ItcgQFeNiGTcHa1Y"
          sx={{ width: 64, height: 64 }}
          className="absolute -mt-10"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-lg font-semibold hover:underline cursor-pointer">
          Omeed Noori
        </p>
        <p className="px-10 text-center text-gray-400">
          Student at Aptech Pakistan | Full Stack Developer | React JS |
          Wordpress | HTMLS,CSS,JS |
        </p>
      </div>
      <div className="border-b-[2px] border-gray-200"></div>

      <div className="hover:bg-gray-200 my-5">
        <div className="mx-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 font-medium ">Connection</p>
            <p className="text-blue-600 font-normal">14</p>
          </div>
          <p className="font-medium">Grow your network</p>
        </div>
      </div>

      <div className="border-b-[2px] border-gray-200"></div>

      <div className="hover:bg-gray-200 py-5">
        <div className="mx-6">
          <div className="flex flex-col">
            <p className="text-gray-500 ">Access exclusive tools & insights</p>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
              <p className="text-medium font-medium cursor-pointer underline hover:underline hover:text-blue-500">
                Try Premium for free
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b-[2px] border-gray-200"></div>

      <div className="flex px-6 items-center gap-2 hover:bg-gray-200 py-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z" fill="#525252"></path>
        </svg>
        <p className="text-medium font-medium cursor-pointer underline hover:no-underline">My items</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
