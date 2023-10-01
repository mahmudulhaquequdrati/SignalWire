import { Grid } from "gridjs-react";
// import { useEffect, useRef, useState } from "react";
// import { useEffect } from "react";
import Profile from "../../components/common/Profile";

export default function CallLogs() {
  const dt = [
    {
      callDate: "2023-10-01",
      callTime: "09:30 AM",
      callDuration: "12 minutes",
      fromNumber: "+1 555-123-4567",
      toNumber: "+1 555-234-5678",
      toNumberName: "Alice",
      recording: "Yes",
      action: "no",
    },
    {
      callDate: "2023-10-02",
      callTime: "02:15 PM",
      callDuration: "8 minutes",
      fromNumber: "+1 555-234-5678",
      toNumber: "+1 555-345-6789",
      toNumberName: "Bob",
      recording: "No",
    },
    {
      callDate: "2023-10-03",
      callTime: "11:45 AM",
      callDuration: "15 minutes",
      fromNumber: "+1 555-345-6789",
      toNumber: "+1 555-456-7890",
      toNumberName: "Charlie",
      recording: "Yes",
    },
    {
      callDate: "2023-10-04",
      callTime: "04:30 PM",
      callDuration: "10 minutes",
      fromNumber: "+1 555-456-7890",
      toNumber: "+1 555-567-8901",
      toNumberName: "David",
      recording: "Yes",
    },
    {
      callDate: "2023-10-05",
      callTime: "08:00 AM",
      callDuration: "5 minutes",
      fromNumber: "+1 555-567-8901",
      toNumber: "+1 555-678-9012",
      toNumberName: "Eve",
      recording: "No",
    },
    {
      callDate: "2023-10-06",
      callTime: "03:20 PM",
      callDuration: "7 minutes",
      fromNumber: "+1 555-678-9012",
      toNumber: "+1 555-789-0123",
      toNumberName: "Frank",
      recording: "Yes",
    },
    {
      callDate: "2023-10-07",
      callTime: "10:10 AM",
      callDuration: "3 minutes",
      fromNumber: "+1 555-789-0123",
      toNumber: "+1 555-890-1234",
      toNumberName: "Grace",
      recording: "No",
    },
    {
      callDate: "2023-10-08",
      callTime: "01:55 PM",
      callDuration: "9 minutes",
      fromNumber: "+1 555-890-1234",
      toNumber: "+1 555-901-2345",
      toNumberName: "Hannah",
      recording: "Yes",
    },
    {
      callDate: "2023-10-09",
      callTime: "07:40 AM",
      callDuration: "6 minutes",
      fromNumber: "+1 555-901-2345",
      toNumber: "+1 555-012-3456",
      toNumberName: "Ivy",
      recording: "No",
    },
    {
      callDate: "2023-10-10",
      callTime: "05:25 PM",
      callDuration: "11 minutes",
      fromNumber: "+1 555-012-3456",
      toNumber: "+1 555-123-4567",
      toNumberName: "Jack",
      recording: "Yes",
    },
    {
      callDate: "2023-10-11",
      callTime: "09:15 AM",
      callDuration: "14 minutes",
      fromNumber: "+1 555-123-4567",
      toNumber: "+1 555-234-5678",
      toNumberName: "Alice",
      recording: "No",
    },
    {
      callDate: "2023-10-12",
      callTime: "02:45 PM",
      callDuration: "7 minutes",
      fromNumber: "+1 555-234-5678",
      toNumber: "+1 555-345-6789",
      toNumberName: "Bob",
      recording: "Yes",
    },
    {
      callDate: "2023-10-13",
      callTime: "11:30 AM",
      callDuration: "9 minutes",
      fromNumber: "+1 555-345-6789",
      toNumber: "+1 555-456-7890",
      toNumberName: "Charlie",
      recording: "No",
    },
    {
      callDate: "2023-10-14",
      callTime: "03:00 PM",
      callDuration: "6 minutes",
      fromNumber: "+1 555-456-7890",
      toNumber: "+1 555-567-8901",
      toNumberName: "David",
      recording: "Yes",
    },
    {
      callDate: "2023-10-15",
      callTime: "08:45 AM",
      callDuration: "10 minutes",
      fromNumber: "+1 555-567-8901",
      toNumber: "+1 555-678-9012",
      toNumberName: "Eve",
      recording: "No",
    },
    {
      callDate: "2023-10-16",
      callTime: "01:10 PM",
      callDuration: "5 minutes",
      fromNumber: "+1 555-678-9012",
      toNumber: "+1 555-789-0123",
      toNumberName: "Frank",
      recording: "Yes",
    },
    {
      callDate: "2023-10-17",
      callTime: "09:00 AM",
      callDuration: "8 minutes",
      fromNumber: "+1 555-789-0123",
      toNumber: "+1 555-890-1234",
      toNumberName: "Grace",
      recording: "No",
    },
    {
      callDate: "2023-10-18",
      callTime: "02:35 PM",
      callDuration: "12 minutes",
      fromNumber: "+1 555-890-1234",
      toNumber: "+1 555-901-2345",
      toNumberName: "Hannah",
      recording: "Yes",
    },

    {
      callDate: "2023-10-01",
      callTime: "09:30 AM",
      callDuration: "12 minutes",
      fromNumber: "+1 555-123-4567",
      toNumber: "+1 555-234-5678",
      toNumberName: "Alice",
      recording: "Yes",
    },
    {
      callDate: "2023-10-02",
      callTime: "02:15 PM",
      callDuration: "8 minutes",
      fromNumber: "+1 555-234-5678",
      toNumber: "+1 555-345-6789",
      toNumberName: "Bob",
      recording: "No",
    },
    {
      callDate: "2023-10-03",
      callTime: "11:45 AM",
      callDuration: "15 minutes",
      fromNumber: "+1 555-345-6789",
      toNumber: "+1 555-456-7890",
      toNumberName: "Charlie",
      recording: "Yes",
    },
    {
      callDate: "2023-10-04",
      callTime: "04:30 PM",
      callDuration: "10 minutes",
      fromNumber: "+1 555-456-7890",
      toNumber: "+1 555-567-8901",
      toNumberName: "David",
      recording: "Yes",
    },
    {
      callDate: "2023-10-05",
      callTime: "08:00 AM",
      callDuration: "5 minutes",
      fromNumber: "+1 555-567-8901",
      toNumber: "+1 555-678-9012",
      toNumberName: "Eve",
      recording: "No",
    },
    {
      callDate: "2023-10-06",
      callTime: "03:20 PM",
      callDuration: "7 minutes",
      fromNumber: "+1 555-678-9012",
      toNumber: "+1 555-789-0123",
      toNumberName: "Frank",
      recording: "Yes",
    },
    {
      callDate: "2023-10-07",
      callTime: "10:10 AM",
      callDuration: "3 minutes",
      fromNumber: "+1 555-789-0123",
      toNumber: "+1 555-890-1234",
      toNumberName: "Grace",
      recording: "No",
    },
    {
      callDate: "2023-10-08",
      callTime: "01:55 PM",
      callDuration: "9 minutes",
      fromNumber: "+1 555-890-1234",
      toNumber: "+1 555-901-2345",
      toNumberName: "Hannah",
      recording: "Yes",
    },
    {
      callDate: "2023-10-09",
      callTime: "07:40 AM",
      callDuration: "6 minutes",
      fromNumber: "+1 555-901-2345",
      toNumber: "+1 555-012-3456",
      toNumberName: "Ivy",
      recording: "No",
    },
    {
      callDate: "2023-10-10",
      callTime: "05:25 PM",
      callDuration: "11 minutes",
      fromNumber: "+1 555-012-3456",
      toNumber: "+1 555-123-4567",
      toNumberName: "Jack",
      recording: "Yes",
    },
    {
      callDate: "2023-10-11",
      callTime: "09:15 AM",
      callDuration: "14 minutes",
      fromNumber: "+1 555-123-4567",
      toNumber: "+1 555-234-5678",
      toNumberName: "Alice",
      recording: "No",
    },
    {
      callDate: "2023-10-12",
      callTime: "02:45 PM",
      callDuration: "7 minutes",
      fromNumber: "+1 555-234-5678",
      toNumber: "+1 555-345-6789",
      toNumberName: "Bob",
      recording: "Yes",
    },
    {
      callDate: "2023-10-13",
      callTime: "11:30 AM",
      callDuration: "9 minutes",
      fromNumber: "+1 555-345-6789",
      toNumber: "+1 555-456-7890",
      toNumberName: "Charlie",
      recording: "No",
    },
  ];

  return (
    <div className="">
      <div className="flex justify-end items-center">
        <Profile />
      </div>

      <div
        className="mt-6  border-[#3048AD] bg-[#1C1C2E] p-[1px] rounded-2xl w-full  "
        style={{
          background: `linear-gradient(to right, #2d2d47, #3048AD) `,
        }}
      >
        <div className="h-full bg-[#1C1C2E] rounded-2xl py-4 px-4 max-w-full">
          <div className="relative">
            <div className="flex justify-between mb-3 mt-1    min-w-0 flex-col lg:flex-row bg-transparent rounded overflow-x-auto">
              <Grid
                data={dt}
                columns={[
                  "Call Date",
                  "Call Time",
                  "Call Duration",
                  "From Number",
                  "To Number",
                  "To Number Name",
                  "Recording",
                  "Action",
                ]}
                search={true}
                pagination={{
                  limit: 3,
                }}
                className={{
                  container: "",
                  table:
                    "items-center bg-transparent   border-collapse  font-Ar mt-6 mb-8 table-auto",
                  th: "px-2 bg-blueGray-50 text-blueGray-500 align-middle   py-3 text-base   whitespace-nowrap font-semibold text-center",
                  td: "border-t-0 px-2  border-l-0 border-r-0 text-base whitespace-nowrap p-4  text-center text-[#A6A6AD]",
                  paginationSummary: "hidden md:block",
                  paginationButton: "border px-3 py-1 me-3 ",
                  paginationButtonCurrent:
                    "bg-[#3637EA] px-3 py-1 border-[#3637EA] ",
                  paginationButtonNext: "border-none",
                  paginationButtonPrev: "border-none",
                }}
              />
              <div className="relative hidden lg:block">
                <button className="absolute -right-0 bg-[#3637EA] text-white px-6 py-1.5 rounded-lg font-Ar w-48 mt-3">
                  Export to CSV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}