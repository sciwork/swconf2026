"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Article from "@/components/Article";
import ScheduleComponent from "@/components/Schedule";
import ToBeAnnounced from "@/components/ToBeAnnounced";
import { DayType } from "@/models/Schedule";
import { getSchedule } from "@/utils/apis";
import dayjs from "@/utils/day";
import { TIME_SLOT_DURATION_MINUTES } from "@/utils/schedule";

const getCurrentDay = (
  days: DayType[],
  searchDay: string | null,
): dayjs.Dayjs | null => {
  if (searchDay) {
    const d = days.find(
      (day) => day.date.format("YYYY-MM-DD") === searchDay,
    )?.date;

    if (d) {
      return d;
    }
  }

  // Fall back to the first day when searchDay is missing or not in the schedule
  return days[0]?.date ?? null;
};

const Program = () => {
  const searchParams = useSearchParams();
  const searchDay = searchParams.get("day");
  const [days, setDays] = useState<DayType[]>([]);
  const [currentDay, setCurrentDay] = useState<dayjs.Dayjs | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSchedule() {
      const schedule = await getSchedule().catch(() => null);
      const newDays = schedule?.conference?.days ?? [];
      setDays(newDays);
      setCurrentDay(getCurrentDay(newDays, searchDay));
      setLoading(false);
    }

    fetchSchedule();
  }, [searchDay]);

  if (isLoading) {
    return <Article>Loading...</Article>;
  }

  return (
    <Article>
      {days.length === 0 ? (
        <ToBeAnnounced />
      ) : (
        <ScheduleComponent
          days={days}
          currentDay={currentDay}
          timeSlotMinutes={TIME_SLOT_DURATION_MINUTES}
        />
      )}
    </Article>
  );
};

// useSearchParams requires a Suspense boundary under static export
const Page = () => (
  <Suspense fallback={<Article>Loading...</Article>}>
    <Program />
  </Suspense>
);

export default Page;
