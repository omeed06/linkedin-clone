import { Avatar } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
const RightSidebar = () => {
  return (
    <div className=" xs: hidden lg:block container flex flex-col border-2 rounded-lg bg-[#fff] max-w-xs ">
      <div className="flex justify-between w-full items-center px-2 py-2">
        <p>Add to your feed</p>
        <button type="button" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path
              d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"
              fill="#525252"
            ></path>
          </svg>
        </button>
      </div>

        <div className="flex px-2 py-2">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEblrLAmVn_jQ/profile-displayphoto-shrink_800_800/0/1622017792315?e=1668038400&v=beta&t=Da5bYgjXdGnfOBWL3O1pLCGo6FYim-zwX5_MaAWRSsM"
            sx={{ width: 64, height: 64 }}
          />
          <div className="px-2">
            <p className="font-medium text-lg">MirWais Azeem</p>
            <p className="">Junior Webdeveloper</p>
            <p className="">Rapidobots</p>
            <button className="px-2 py-2 rounded-full border-2 ">
              <AddIcon />
              Follow
            </button>
          </div>
        </div>

        <div className="flex px-2 py-2">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFsDNuZrhnPDA/profile-displayphoto-shrink_200_200/0/1622650034736?e=1668038400&v=beta&t=W26MZZZ7haQP_y0U4oMoWmebuEul9g_SRJRUAZBQnlM"
            sx={{ width: 64, height: 64 }}
          />
          <div className="px-2">
            <p className="font-medium text-lg">Salman Nadeem</p>
            <p className="">Senior Full Stack Developer</p>
            <p className="">Rapidobots</p>
            <button className="px-2 py-2 rounded-full border-2 ">
              <AddIcon />
              Follow
            </button>
          </div>
        </div>

        <div className="flex px-2 py-2">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQFYH9a2h8ScSw/profile-displayphoto-shrink_200_200/0/1626300259887?e=1668038400&v=beta&t=OEF_2f-fDZVq8gk4z8HD4_6zxTBBHdsr5oBlftwFkDo"
            sx={{ width: 64, height: 64 }}
          />
          <div className="px-2">
            <p className="font-medium text-lg">Safwan Ahmed Khan</p>
            <p className="">Social Media Manager</p>
            <p className="">Rapidobots</p>
            <button className="px-2 py-2 rounded-full border-2 ">
              <AddIcon />
              Follow
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default RightSidebar;
