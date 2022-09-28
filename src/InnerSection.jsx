import React from "react";
import { Avatar } from "@mui/material";
import "./innerSection.css";
import Post from "./post";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

const InnerSection = () => {
  const postColumnRef = collection(db, "post");
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const sendpost = (e) => {
    e.preventDefault();
    addDoc(postColumnRef, { message: e.target.value });
  };

  useEffect(() => {
    getDocs(postColumnRef)
      .then((snapshot) => {
        const snapshotPost = [];
        snapshot.forEach((doc) => {
          snapshotPost.push({ ...doc.data(), id: doc.id });
        });
        setPosts(snapshotPost);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="container max-w-xl border-2 rounded-xl bg-[#fff] sm:mr-3">
        <div className="inner-search flex py-2 px-5 gap-2 items-center">
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C4D03AQFBvia2Cs03Qw/profile-displayphoto-shrink_200_200/0/1618318553307?e=1668038400&v=beta&t=mpTz-yUgKxAwYrPmj1KVX1bj1V-ItcgQFeNiGTcHa1Y"
            sx={{ width: 64, height: 64 }}
          />
          <input
            onClick={() => setShowModal(true)}
            type="text"
            onBlur={sendpost}
            placeholder="Send a post"
            className="rounded-full w-full h-14 border-2 border-inherit text-gray-800 text-start px-5 hover:bg-gray-100"
          ></input>
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

      <div
        tabindex="-1"
        className={`${
          showModal ? "" : "hidden"
        } bg-black/60 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center`}
      >
        <div className="relative p-4 w-full max-w-xl mx-auto h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Create a post
              </h3>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-2 items-center">
                <Avatar
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQFBvia2Cs03Qw/profile-displayphoto-shrink_200_200/0/1618318553307?e=1668038400&v=beta&t=mpTz-yUgKxAwYrPmj1KVX1bj1V-ItcgQFeNiGTcHa1Y"
                  sx={{ width: 50, height: 50 }}
                />
                <div className="flex flex-col">
                  <p className="text-md font-semibold">Omeed Noori</p>
                  <button className="border border-gray-800 px-2 py-1 rounded-full flex items-center gap-2">
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
                        d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"
                        fill="#00000099"
                      ></path>
                    </svg>
                    <span>Anyone</span>
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
                        d="M8 11L3 6h10z"
                        fill-rule="evenodd"
                        fill="#00000099"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="">
                <div className="flex justify-start items-baseline overflow-y-hidden overflow-x-hidden max-w-2xl">
                  <textarea
                    name=""
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="what do you want to talk about ?"
                    className="outline-none border-none ring-transparent ring-0 focus:ring-0 shadow-none w-full"
                  ></textarea>
                </div>
              </div>
              <div className="">
                <button className="border-1 rounded-sm  px-2 py-2 hover:bg-[#E2F0FE] text-[#0A66C2] font-medium">
                  Add hashtag
                </button>
              </div>
            </div>

            <div className="flex gap-4 p-5">
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
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" fill="#5E5E5E"></path>
              </svg>

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
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z" fill="#5E5E5E"></path>
              </svg>

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
                <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z" fill="#5E5E5E"></path>
              </svg>

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
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z" fill="#5E5E5E"></path>
              </svg>

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
                <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z" fill="#5E5E5E"></path>
              </svg>

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
                <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z" fill="#5E5E5E"></path>
              </svg>

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
                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z" fill="#5E5E5E"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {posts.map((post) => (
        <div>
          <Post
            name="umeed"
            description="full stack developer"
            message={post?.message}
          />
        </div>
      ))}
    </div>
  );
};

export default InnerSection;
