import React from "react";
import { Avatar } from "@mui/material";
import "./innerSection.css";
import Post from "./post";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";

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
        <div className="relative p-4 w-full max-w-3xl mx-auto h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
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

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Decline
              </button>
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
