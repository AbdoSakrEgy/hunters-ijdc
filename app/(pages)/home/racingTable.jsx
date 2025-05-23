"use client";
import Image from "next/image";
import "./racingTable.css";
import { raceData } from "./data";
import { months } from "./data";
import { daysOfMonth } from "./data";
import { useState } from "react";

export default function RacingTable() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(1);
  function nextMonth() {
    if (month == 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  }
  function prevtMonth() {
    if (month == 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  }

  return (
    <main className="racing-container1">
      <main className="racing-container2">
        <div className="racing-sec1">
          <div className="main-title">رزمانة السباقات</div>
        </div>
        <div className="racing-sec2">
          <div className="table-body">
            {raceData[1][2025]["01"]["01"].map((element, index) => (
              <div key={index} className="table-cell relative">
                <div className="date">{element.id}</div>
                <div className="day">{element.day}</div>
                {/* ----------- */}
                <div className="race-container">
                  <button
                    className="race"
                    onClick={() =>
                      document
                        .getElementById(`my_modal_${element.id}`)
                        .showModal()
                    }
                  ></button>
                  <dialog id={`my_modal_${element.id}`} className="modal">
                    <div className="modal-box race-details">
                      <div className="name">{element.name}</div>
                      <div className="classification">
                        {element.classification}
                      </div>
                      <div className="dateTime">
                        <div className="time">{element.time}</div>
                        <Image
                          src="/assets/icons/clock.svg"
                          alt="img"
                          width={20}
                          height={20}
                        />
                        <div className="date">{element.date}</div>
                        <Image
                          src="/assets/icons/calendar.svg"
                          alt="img"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="distance">
                        <span className="w-20 text-right text-[#177245]">
                          {element.distance}
                        </span>
                        <span className="w-20 text-right">المسافة </span>
                      </div>
                      <div className="type">
                        <span className="w-20 text-right text-[#177245]">
                          {element.type}
                        </span>
                        <span className="w-20 text-right">النوع </span>
                      </div>
                      <div className="age">
                        <span className="w-20 text-right text-[#177245]">
                          {element.age}
                        </span>
                        <span className="w-20 text-right">العمر </span>
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
                        <span className="w-32 text-right text-[#177245]">
                          {element.award}
                        </span>
                        <span className="w-20 text-right">الجائزة </span>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
                {/* ----------- */}
              </div>
            ))}
          </div>
          <div className="table-header">
            <div className="year">{year}</div>
            <div className="month">{months[month - 1]}</div>
            <div className="controls">
              <button onClick={prevtMonth} className="prev">
                <Image
                  src="/assets/icons/left-arrow-circle.svg"
                  alt="img"
                  width={35}
                  height={35}
                />
              </button>
              <button onClick={nextMonth} className="next">
                <Image
                  src="/assets/icons/right-arrow-circle.svg"
                  alt="img"
                  width={35}
                  height={35}
                />
              </button>
            </div>
            <hr />
            <div className="title">الأحداث</div>
          </div>
        </div>
      </main>
    </main>
  );
}
