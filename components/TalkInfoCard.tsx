import clsx from "clsx";
import Button from "@/components/Button";
import { TalkType } from "@/models/Schedule";

type Props = {
  className?: string;
  variant: TalkType["type"];
  talk: TalkType;
};

const TalkInfoCard = ({ className, variant, talk, ...props }: Props) => {
  const durationInMinutes = talk.end.diff(talk.start, "minute");
  const shouldShowMoreButton =
    talk.type === "Talk" || talk.type === "Workshop";
  const shouldShowAbstract = talk.type !== "Non-Talk";

  return (
    <div
      className={clsx(
        "tw:rounded-3xl tw:p-8 tw:tablet:rounded-2xl",
        variant === "Non-Talk" && "tw:bg-stone-100",
        variant === "Talk" && "tw:bg-orange-100",
        variant === "Workshop" && "tw:bg-sky-100",
        variant === "Sprint" && "tw:bg-rose-100",
        className,
      )}
      {...props}
    >
      <div className="tw:desktop:sticky tw:desktop:top-16">
        <div className="tw:mb-1 tw:flex tw:flex-wrap tw:items-center tw:gap-2">
          <div
            className={clsx(
              "tw:font-yk tw:text-2xl tw:font-medium",
              variant === "Non-Talk" && "tw:text-stone-800",
              variant === "Talk" && "tw:text-orange-800",
              variant === "Workshop" && "tw:text-sky-800",
              variant === "Sprint" && "tw:text-rose-800",
            )}
          >
            {talk.title}
          </div>
          {talk.room && (
            <div
              className={clsx(
                "tw:-mt-1 tw:rounded-lg tw:border tw:px-1.5 tw:py-1 tw:text-xs tw:uppercase",
                variant === "Non-Talk" &&
                  "tw:border-stone-500 tw:bg-stone-50 tw:text-stone-700",
                variant === "Talk" &&
                  "tw:border-orange-500 tw:bg-orange-50 tw:text-orange-700",
                variant === "Workshop" &&
                  "tw:border-sky-500 tw:bg-sky-50 tw:text-sky-700",
                variant === "Sprint" &&
                  "tw:border-rose-500 tw:bg-rose-50 tw:text-rose-700",
              )}
            >
              {talk.room}
            </div>
          )}
        </div>
        <div
          className={clsx(
            "tw:text-sm",
            variant === "Non-Talk" && "tw:text-stone-600",
            variant === "Talk" && "tw:text-orange-600",
            variant === "Workshop" && "tw:text-sky-600",
            variant === "Sprint" && "tw:text-rose-600",
          )}
        >
          {talk?.persons?.map((person) => person.publicName).join(", ")}
        </div>
        <div
          className={clsx(
            "tw:text-sm",
            variant === "Non-Talk" && "tw:text-stone-500",
            variant === "Talk" && "tw:text-orange-500",
            variant === "Workshop" && "tw:text-sky-500",
            variant === "Sprint" && "tw:text-rose-500",
          )}
        >
          {talk.start.format("HH:mm")} - {talk.end.format("HH:mm")} ({durationInMinutes} min)
        </div>
        {shouldShowAbstract && talk.abstract && (
          <div
            className={clsx(
              "tw:mt-2 tw:line-clamp-3 tw:tablet:mt-4",
              variant === "Non-Talk" && "tw:text-stone-700",
              variant === "Talk" && "tw:text-orange-700",
              variant === "Workshop" && "tw:text-sky-700",
              variant === "Sprint" && "tw:text-rose-700",
            )}
          >
            {talk.abstract}
          </div>
        )}
        {shouldShowMoreButton && (
          <div className="tw:mt-4">
            <Button
              variant={variant === "Workshop" ? "action" : "default"}
              btnSize="small"
              to={talk.url}
              target="_blank"
            >
              More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalkInfoCard;
