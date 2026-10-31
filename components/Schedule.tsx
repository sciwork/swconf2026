"use client";

import clsx from "clsx";
import { useState } from "react";
import DayLink from "@/components/DayLink";
import TalkInfoCard from "@/components/TalkInfoCard";
import { DayType } from "@/models/Schedule";
import dayjs from "@/utils/day";

type Props = {
  days: DayType[];
  currentDay: dayjs.Dayjs | null;
};

const Schedule = ({ days, currentDay }: Props) => {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const day = days.find((day) => day.date.isSame(currentDay, "day"));
  if (!day) return null;
  // Sort by name so the tab order does not depend on the pretalx response order
  const roomNames = Object.keys(day.rooms).toSorted((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );
  // Fall back to the first room when nothing is selected yet or the selected
  // room does not exist on the current day
  const activeRoom =
    selectedRoom && roomNames.includes(selectedRoom)
      ? selectedRoom
      : roomNames[0];
  const talks = (day.rooms[activeRoom] ?? []).toSorted((a, b) =>
    a.start.isBefore(b.start) ? -1 : 1,
  );

  return (
    <>
      {days.length > 1 && (
        <div className="tw:mb-5 tw:flex tw:justify-center tw:gap-8 tw:tablet:mb-10">
          {days.map((day) => (
            <DayLink
              key={day.date.format("MM-DD")}
              to={`/program?day=${day.date.format("YYYY-MM-DD")}`}
              active={day.date.isSame(currentDay, "day")}
            >
              {day.date.format("ddd, MM/DD")}
            </DayLink>
          ))}
        </div>
      )}
      <div
        className="tw:sticky tw:top-0 tw:z-10 tw:mb-6 tw:flex tw:justify-center tw:gap-8 tw:bg-white/90 tw:py-3 tw:backdrop-blur-sm tw:tablet:mb-10"
        role="tablist"
      >
        {roomNames.map((roomName) => {
          const isActive = roomName === activeRoom;
          return (
            <button
              key={`room-tab-${roomName}`}
              className={clsx(
                "tw:border-b-2 tw:font-yk tw:text-xl tw:leading-loose tw:tablet:text-3xl",
                isActive
                  ? "tw:cursor-default tw:border-rose-600 tw:text-rose-600"
                  : "tw:cursor-pointer tw:border-transparent tw:hover:text-rose-600",
              )}
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedRoom(roomName)}
              type="button"
            >
              Room {roomName}
            </button>
          );
        })}
      </div>
      <div className="tw:flex tw:flex-col tw:gap-6" role="tabpanel">
        {talks.map((talk) => (
          <div
            className="tw:grid tw:grid-cols-1 tw:gap-2 tw:tablet:grid-cols-[5.5rem_minmax(0,1fr)] tw:tablet:gap-4"
            key={talk.id}
          >
            <div className="tw:text-center tw:font-yk tw:text-2xl tw:tablet:pt-2">
              {talk.start.format("HH:mm")}
            </div>
            <TalkInfoCard variant={talk.type} talk={talk} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Schedule;
