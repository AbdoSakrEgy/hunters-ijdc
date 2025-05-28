"use client";
import Image from "next/image";
import "./racingTable.css";
import { raceData } from "./data";
import { months } from "./data";
import { use, useState, useEffect } from "react";
import { Dropdown, Avatar } from "rsuite";

// Utility function to get week dates (Sunday to Saturday)
function getWeekDates(startDate) {
  const week = [];
  const date = new Date(startDate);
  date.setDate(date.getDate() - date.getDay());
  for (let i = 0; i < 7; i++) {
    week.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return week;
}

// Get the start of the current week (Sunday)
function getCurrentWeekStart(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - d.getDay());
  return d;
}

// Helper to format ISO date string to "14 مايو 2025"
function formatDateToArabic(isoString) {
  if (!isoString) return "";
  const date = new Date(isoString);
  return date.toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Helper to format two ISO date strings to "01:30 AM - 02:04 PM"
function formatTimeRange(startIso, endIso) {
  if (!startIso || !endIso) return "";
  const start = new Date(startIso);
  const end = new Date(endIso);
  const startStr = start.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const endStr = end.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${startStr} - ${endStr}`;
}

export default function RacingTable() {
  // State to track the start date of the current week being viewed
  const [weekStart, setWeekStart] = useState(getCurrentWeekStart());
  const currentWeek = getWeekDates(weekStart);
  // State to store races fetched from API
  const [races, setRaces] = useState([]);

  // Fetch races for the current week using pagination (?dateFrom=)
  useEffect(() => {
    const dateFrom = weekStart.toISOString().split("T")[0];
    fetch(`https://mayadeen-api.wovenclouds.com/api/race?dateFrom=${dateFrom}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure races is always an array
        if (Array.isArray(data)) {
          setRaces(data);
        } else if (Array.isArray(data?.data)) {
          setRaces(data.data);
        } else {
          setRaces([]);
        }
      })
      .catch(() => setRaces([]));
  }, [weekStart]);

  // Helper: check if a date has races
  function hasRaceOnDate(date) {
    // Format date as YYYY-MM-DD
    const d = date.toISOString().split("T")[0];
    // If races has a data array, use it; otherwise, use races directly if it's an array
    const raceArr = Array.isArray(races?.data)
      ? races.data
      : Array.isArray(races)
      ? races
      : [];
    return raceArr.some((race) => race?.date?.split("T")[0] === d);
  }

  // Helper: get all races for a given date
  function getRacesOnDate(date) {
    const d = date.toISOString().split("T")[0];
    // races is now always an array
    return races.filter((race) => race?.date?.split("T")[0] === d);
  }

  // Function to go to the next week
  function goToNextWeek() {
    const next = new Date(weekStart);
    next.setDate(next.getDate() + 7);
    setWeekStart(next);
  }

  // Function to go to the previous week
  function goToPrevWeek() {
    const prev = new Date(weekStart);
    prev.setDate(prev.getDate() - 7);
    setWeekStart(prev);
  }
  const renderToggle = (props) => <div className="race" {...props}></div>;

  return (
    <main className="racing-container1" data-aos="fade-up">
      <main className="racing-container2">
        <div className="racing-sec1">
          <div className="main-title titlesize-onSmall">رزمانة السباقات</div>
        </div>
        <div className="racing-sec2 padding-onMediam h-onSmall">
          <div className="table-body">
            {currentWeek.map((date, idx) => {
              const racesForDay = getRacesOnDate(date);
              return (
                <div className="table-cell relative" key={idx}>
                  <div className="date datesize-onSmall">{date.getDate()}</div>
                  <div className="day daysize-onSmall">
                    {date.toLocaleDateString("ar-EG", { weekday: "long" })}
                  </div>
                  <div className="race-container">
                    {racesForDay.map((race, i) => (
                      <Dropdown
                        renderToggle={renderToggle}
                        style={{ position: "relative" }}
                      >
                        <Dropdown.Item
                          style={{
                            position: "absolute",
                            top: "5px",
                            left: "5px",
                            width: "fit-content",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                            ></path>
                          </svg>
                        </Dropdown.Item>
                        <Dropdown.Item
                          panel
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            gap: "0.75rem",
                            padding: "1rem", // Overrides previous p-3
                            width: "100%", // Overrides previous w-fit
                            borderRadius: "0.5rem",
                            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // Overrides previous shadow-2xl
                            fontSize: "20px",
                            color: "black",
                            backgroundColor: "white",
                          }}
                        >
                          {/*  */}
                          <div className="name">{race.name}</div>
                          <div className="classification">
                            {race.classification}
                          </div>
                          <div className="dateTime col-onSmall">
                            <div className="date w-[170px]">
                              {formatTimeRange(race.startTime, race.endTime)}
                            </div>
                            <Image
                              src="/assets/icons/clock.svg"
                              alt="img"
                              width={20}
                              height={20}
                            />
                            <div className="time w-[100px]">
                              {formatDateToArabic(race.date)}
                            </div>
                            <Image
                              src="/assets/icons/calendar.svg"
                              alt="img"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div className="distance">
                            <span className="w-20 text-right text-[#177245]">
                              {race.averageDistance}
                            </span>
                            <span className="w-20 text-right">المسافة </span>
                          </div>
                          <div className="type">
                            <span className="w-fit text-right text-[#177245]">
                              {race.floor}
                            </span>
                            <span className="w-20 text-right">النوع </span>
                          </div>
                          <div className="age">
                            <span className="w-20 text-right">سنة </span>
                            <span className="w-fit text-right text-[#177245]">
                              {race.averageAge}
                            </span>
                            <span className="w-20 text-right">العمر </span>
                          </div>
                          <div className="award">
                            <span className="w-32 text-right text-[#177245]">
                              {race.averagePrize}
                            </span>
                            <span className="w-20 text-right">الجائزة </span>
                          </div>
                          <div className="award">
                            <div className="custom-btn">
                              <Image
                                src="/assets/icons/left-arrow.svg"
                                alt="img"
                                width={15}
                                height={15}
                              />
                              <div>تفاصيل</div>
                            </div>
                          </div>
                          {/*  */}
                        </Dropdown.Item>
                      </Dropdown>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="table-header">
            <div className="year">{weekStart.getFullYear()}</div>
            <div className="month">{months[weekStart.getMonth()]}</div>
            <div className="controls">
              <button className="prev" onClick={goToPrevWeek}>
                <Image
                  src="/assets/icons/left-arrow-circle.svg"
                  alt="img"
                  width={33}
                  height={33}
                  className="btn-onSmall"
                />
              </button>
              <button className="next" onClick={goToNextWeek}>
                <Image
                  src="/assets/icons/right-arrow-circle.svg"
                  alt="img"
                  width={33}
                  height={33}
                  className="btn-onSmall"
                />
              </button>
            </div>
            <hr />
            <div className="title hide-onSmall">الأحداث</div>
          </div>
        </div>
      </main>
    </main>
  );
}
