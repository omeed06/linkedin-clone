import React from "react";
import "./App.css";
import Linkedin from "../src/images/linkedin.png";
import SearchIcon from "@mui/icons-material/Search";
import HeaderMenus from "./headerMenus";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from '@mui/icons-material/Apps';

function Headers() {
  return (
    <>
      <div className="flex justify-evenly py-2 border-b-2">
        <div className="flex gap-2 justify-center items-center">
          <div className="iconn">
            <img src={Linkedin} alt="" />
          </div>
          <div className="search-input flex p-2 items-center rounded-lg bg-[#eef3f8]">
            <SearchIcon />
            <input type="text" placeholder="Search" className="hidden lg:block"/>
          </div>
        </div>

        <div className="flex gap-4 md:gap-10">
          <HeaderMenus Icon={HomeIcon} title="Home" />
          <HeaderMenus Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderMenus Icon={WorkIcon} title="Jobs" />
          <HeaderMenus Icon={MessageIcon} title="Message" />
          <HeaderMenus Icon={NotificationsIcon} title="Notification" />
          <HeaderMenus avatar="https://media-exp1.licdn.com/dms/image/C4D03AQFBvia2Cs03Qw/profile-displayphoto-shrink_200_200/0/1618318553307?e=1668038400&v=beta&t=mpTz-yUgKxAwYrPmj1KVX1bj1V-ItcgQFeNiGTcHa1Y" title="Me"/>
          <div className="border-l-[2px] border-gray-300"></div>
          <HeaderMenus Icon={AppsIcon} title="Work"/>
        </div>
      </div>
    </>
  );
}

export default Headers;