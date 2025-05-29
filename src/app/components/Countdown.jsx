"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-07-19T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();

    const isSameDay =
      now.getFullYear() === targetDate.getFullYear() &&
      now.getMonth() === targetDate.getMonth() &&
      now.getDate() === targetDate.getDate();

    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0 && !isSameDay) {
      return { status: "past" };
    }

    if (isSameDay) {
      return { status: "today" };
    }

    return {
      status: "countdown",
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.status === "today") {
    return <p className="text-xl font-bold text-turquoise-400">É hoje!</p>;
  }

  if (timeLeft.status === "past") {
    return (
      <p className="text-xl font-bold text-turquoise-400">Memorial Bereshit</p>
    );
  }

  return (
    <p className="text-xs sm:text-xl font-semibold text-white">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </p>
  );
}
