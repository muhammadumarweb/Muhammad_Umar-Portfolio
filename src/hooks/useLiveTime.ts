"use client";

import { useEffect, useState } from "react";

/**
 * Returns the current time formatted in a given IANA timezone, refreshed
 * every second. Used in the footer to show live Pakistan time.
 *
 * @param timeZone IANA timezone string (e.g. `"Asia/Karachi"`).
 * @returns A formatted `HH:MM:SS` string, or `"--:--:--"` before mount.
 */
export function useLiveTime(timeZone: string = "Asia/Karachi"): string {
  const [time, setTime] = useState<string>("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const update = () => setTime(formatter.format(new Date()));

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
