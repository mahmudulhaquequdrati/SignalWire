import React from "react";
import { useState } from "react";

const dashboardIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      d="M3 7.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6ZM14 20.4v-3.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM14 12.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM3 20.4v-8.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
    ></path>
  </svg>
);

const callIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.118 14.702 14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479Z"
    ></path>
  </svg>
);

const realTimeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16V8M12 16v-5M16 16v-3"
    ></path>
    <path
      stroke="#fff"
      strokeWidth="1.5"
      d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"
    ></path>
  </svg>
);

const phoneNumber = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    color="#000000"
  >
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"
    ></path>
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"
    ></path>
    <path
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    ></path>
  </svg>
);

const MenuData = () => {
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: dashboardIcon,
      link: "/dashboard",
      iscurrentState,
      click: function () {
        setIscurrentState("Dashboard");
      },
    },
    {
      id: "realTime",
      label: "Real Time",
      icon: realTimeIcon,
      link: "/realTime",
      iscurrentState,
      click: function () {
        setIscurrentState("Real Time");
      },
    },
    {
      id: "callLogs",
      label: "Call Logs",
      icon: callIcon,
      link: "/callLogs",
      iscurrentState,
      click: function () {
        setIscurrentState("Call Logs");
      },
    },
    {
      id: "phoneNumbers",
      label: "Phone Numbers",
      icon: phoneNumber,
      link: "/phoneNumbers",
      iscurrentState,
      click: function () {
        setIscurrentState("Phone Numbers");
      },
    },
  ];

  return <React.Fragment>{menus}</React.Fragment>;
};

export default MenuData;
