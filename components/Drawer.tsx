"use client";

import clsx from "clsx";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  show: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
};

const Drawer = ({ show, onClick, children }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  if (!mounted || !ref.current) return null;

  return createPortal(
    <>
      <div
        className={clsx(
          "tw:fixed tw:inset-0 tw:z-10 tw:bg-black tw:transition-opacity tw:duration-300 tw:ease-linear",
          show
            ? "tw:pointer-events-auto tw:opacity-50"
            : "tw:pointer-events-none tw:opacity-0",
        )}
        onClick={onClick}
      />
      <div
        aria-hidden={!show}
        className={clsx(
          "tw:fixed tw:top-0 tw:right-0 tw:z-50 tw:h-screen tw:min-w-[300px] tw:rounded-l-3xl tw:bg-white tw:shadow-xl",
          "tw:translate-x-0 tw:transform tw:transition tw:duration-300 tw:ease-in-out",
          show
            ? "tw:translate-x-0"
            : "tw:pointer-events-none tw:translate-x-full",
        )}
      >
        {children}
      </div>
    </>,
    ref.current,
  );
};

export default Drawer;
