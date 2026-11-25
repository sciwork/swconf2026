import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import NextLink from "next/link";
import logoImg from "@/assets/android-chrome-512x512.webp";

type Props = {
  image?: StaticImageData;
  name: string;
  email?: string;
};

const Avatar = ({ image, name, email }: Props) => {
  return (
    <div className="tw:flex tw:w-72 tw:flex-none tw:flex-col tw:items-center">
      <div
        className={clsx("tw:mb-5", {
          "drop-shadow-avatar": !!image,
        })}
      >
        {/* A member without an image shows the complete sciwork logo. */}
        <Image
          className={clsx("tw:h-72 tw:w-60", {
            "avatar-mask tw:object-cover": !!image,
            "tw:object-contain": !image,
          })}
          src={image ?? logoImg}
          alt="avatar"
        />
      </div>
      <div className="tw:mb-3 tw:font-yk tw:text-4xl tw:text-gray-950">
        {name}
      </div>
      <div className="tw:min-h-[1.75rem] tw:w-full tw:text-center">
        {email && (
          <NextLink
            href={`mailto:${email}`}
            target="_blank"
            className="tw:font-yk tw:text-xl tw:font-normal tw:text-gray-900 tw:no-underline tw:hover:text-sky-600"
          >
            {email}
          </NextLink>
        )}
      </div>
    </div>
  );
};

export default Avatar;
