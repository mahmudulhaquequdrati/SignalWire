// import React from "react";

import ChartBar from "../../components/Chats/BarChar";
import Profile from "../../components/common/Profile";
import lineSvg from "../../assets/line.svg";
import { useEffect, useState } from "react";
import {
  getAllCalls,
  getInCommingPhoneNumbers,
} from "../../actions/ServerAction";
// import { useDispatch, useSelector } from "react-redux";
// import { toggleApi } from "../../features/layout/layoutSlice";

export default function RealTime() {
  const [calls, setCalls] = useState({});

  // const api = useSelector((state) => state.layout);
  // const { apiCall } = api || {};
  const [dataObject, setDataObject] = useState({});

  const item = sessionStorage.getItem("calls");
  const phone = sessionStorage.getItem("incomming_phone");

  useEffect(() => {
    if (item) {
      setCalls(JSON.parse(item));
    }
  }, [item]);

  useEffect(() => {
    if (phone) {
      setDataObject(JSON.parse(phone));
    }
  }, [phone]);

  useEffect(() => {
    if (calls?.calls) {
      setInterval(() => {
        // if (!apiCall) {
        getAllCalls()
          .then((response) => {
            setCalls(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
        // }
      }, 1000);
    }
  }, [calls.calls]);
  // const dispatch = useDispatch();

  useEffect(() => {
    getInCommingPhoneNumbers()
      .then((response) => {
        setDataObject(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // dispatch(toggleApi(true));
  }, []);

  // incoming_phone_numbers
  function secondsToMinutesAndSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;
    return minutes + " mins " + remainingSeconds + " sec";
  }

  return (
    <div>
      <div className="flex justify-end items-center">
        <Profile />
      </div>

      {/* <div className="flex"> */}
      <div className=" flex gap-4  justify-start flex-col lg:flex-row">
        <div
          className="basis-3/5 mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full lg:w-3/6 h-[23rem] md:h-[25rem] "
          style={{
            background: `linear-gradient(to right, #2d2d47, #3048AD) `,
          }}
        >
          <div className="w-full h-full pb-24 lg:pb-20 bg-[#1C1C2E] rounded-2xl py-8 px-6">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium">Calls</h1>
              <div className="flex me-4 gap-2 ">
                <img src={lineSvg} className="w-8 " alt="" />
                <p className="text-[#34AA69] -mt-4">17%</p>
              </div>
            </div>
            <div className="w-full h-full relative flex  items-center">
              <ChartBar calls={calls} />
              <h1 className=" font-bold font-Dm uppercase  text-lg origin-center -rotate-90 -me-6">
                Calls
              </h1>
            </div>
            <div className=" mt-4 lg:mt-0 font-bold font-Dm uppercase text-center text-xl">
              Time
            </div>
          </div>
        </div>
        <div className="basis-2/5 w-full lg:w-3/6   ">
          <div
            className="mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
            style={{
              background: `linear-gradient(to right, #2d2d47, #3048AD) `,
            }}
          >
            <div className="w-full h-full  bg-[#1C1C2E] rounded-2xl py-8 px-8">
              <h1 className="text-xl font-medium">Calls In Progress</h1>
              <div className="flex  mt-4 items-center justify-between">
                <div className="flex gap-8 mt-4 items-center">
                  <div className="flex items-center justify-center bg-[#3637EA] h-16 w-16  rounded-full ">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        fill="none"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        color="#fff"
                        className="z-10"
                      >
                        <path
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.243 5.243h3m3 0h-3m0 0v-3m0 3v3M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-5xl font-Ar font-bold ">
                    {calls?.calls?.filter((c) => {
                      return c.status === "in-progress";
                    })?.length || 0}
                  </h1>
                </div>
                <div className="flex me-4 gap-1 mt-4">
                  <img src={lineSvg} className="w-8 mt-6" alt="" />
                  <p className="text-[#34AA69]">17%</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-4 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl"
            style={{
              background: `linear-gradient(to right, #2d2d47, #3048AD) `,
            }}
          >
            <div className="w-full h-full  bg-[#1C1C2E] rounded-2xl py-8 px-8">
              <h1 className="text-xl font-medium">Call Ringing</h1>
              <div className="flex  mt-4 items-center justify-between">
                <div className="flex gap-8 mt-4 items-center">
                  <div className="flex items-center justify-center bg-[#3637EA] h-16 w-16  rounded-full ">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                        fill="none"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        color="#fff"
                        className="z-10"
                      >
                        <path
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.243 5.243h3m3 0h-3m0 0v-3m0 3v3M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-5xl font-Ar font-bold ">
                    {calls?.calls?.filter((c) => {
                      return c.status === "ringing";
                    })?.length || 0}
                  </h1>
                </div>
                <div className="flex me-4 gap-1 mt-4">
                  <img src={lineSvg} className="w-8 mt-6" alt="" />
                  <p className="text-[#34AA69]">17%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-6 w-full  ">
        <div
          className="mt-6 overflow-hidden border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl "
          style={{
            background: `linear-gradient(to right, #2d2d47, #3048AD) `,
          }}
        >
          <div className="w-full h-full bg-[#1C1C2E] rounded-2xl py-8 px-12 md:px-2 lg:px-12">
            <div className="relative flex flex-col min-w-0  bg-transparent   rounded ">
              <div className=" overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse  font-Ar ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-base   whitespace-nowrap font-semibold text-center">
                        Name
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-base   whitespace-nowrap font-semibold text-center">
                        From
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-base   whitespace-nowrap font-semibold text-center">
                        To
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-base   whitespace-nowrap font-semibold text-center">
                        Status
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-base   whitespace-nowrap font-semibold text-center">
                        Durations
                      </th>
                    </tr>
                  </thead>

                  <tbody className="relative my-12 h-20">
                    {calls?.calls?.length ? (
                      calls?.calls.filter((d) => {
                        return (
                          d.status === "ringing" || d.status === "in-progress"
                          // || d.status === "completed"
                        );
                      }).length ? (
                        calls?.calls
                          .filter((d) => {
                            return (
                              d.status === "ringing" ||
                              d.status === "in-progress"
                              // ||d.status === "completed"
                            );
                          })
                          ?.map((d, i) => {
                            return (
                              <tr key={i}>
                                <th className="border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center ">
                                  {dataObject?.incoming_phone_numbers?.filter(
                                    (dt) => dt?.phone_number === d.to
                                  )[0]?.friendly_name || "NA"}
                                </th>
                                <td className="border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4  text-center">
                                  {d.from}
                                </td>
                                <td className="border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                                  {d.to}
                                </td>
                                <td className="border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center ">
                                  <button
                                    className={` text-white px-4 py-2 rounded-md ${
                                      d.status === "in-progress"
                                        ? //  || d.status === "completed"
                                          "bg-green-500"
                                        : "bg-[#3637EA]"
                                    }`}
                                  >
                                    {d.status}
                                  </button>
                                </td>
                                <td className="border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4 text-center">
                                  {secondsToMinutesAndSeconds(d?.duration || 0)}
                                </td>
                              </tr>
                            );
                          })
                      ) : (
                        <p className="mt-6 absolute">
                          No calls found ringing or in progress
                        </p>
                      )
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
