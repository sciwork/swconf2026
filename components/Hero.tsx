"use client";

import Image from "next/image";
import {
  faDiscord,
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialLink from "@/components/IconLink";
import MobileNavigator from "@/components/MenuDrawer";
import logoImg from "@/assets/android-chrome-512x512.webp";

const Hero = () => {
  return (
    <div className="tw:w-screen tw:bg-gradient-to-b tw:from-orange-200 tw:via-sky-50 tw:to-white">
      <div className="tw:w-full">
        <div className="tw:flex tw:h-full tw:w-full tw:flex-col tw:items-center tw:px-8 tw:pt-5 tw:lg:pt-20">
          <div className="tw:w-full tw:rounded-md tw:border-x-2 tw:border-t-2 tw:border-none tw:border-white tw:tablet:border-solid">
            <div className="tw:flex tw:w-full tw:items-center tw:justify-between tw:px-5 tw:pt-8 tw:pb-14">
              <div className="tw:flex">
                <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD" />
                <SocialLink
                  icon={faXTwitter}
                  to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
                />
                <SocialLink
                  icon={faLinkedin}
                  to="https://tw.linkedin.com/company/sciwork"
                />
                <SocialLink
                  icon={faFacebook}
                  to="https://www.facebook.com/sciworkdev"
                />
              </div>
              <div className="tw:flex tw:items-center">
                <MobileNavigator />
              </div>
            </div>
            <div className="tw:flex tw:w-full tw:justify-center tw:pb-16 tw:text-center">
              <div className="tw:flex tw:max-w-4xl tw:flex-col tw:items-center tw:gap-7">
                <Image
                  src={logoImg}
                  alt="sciwork logo"
                  width={120}
                  height={120}
                  priority
                  className="tw:size-24 tw:object-contain tw:drop-shadow-lg tw:tablet:size-32"
                />
                <div className="tw:font-yk tw:leading-none tw:text-neutral-950">
                  <p className="tw:text-4xl tw:font-semibold tw:tracking-normal tw:lowercase tw:tablet:text-5xl">
                    sciwork
                  </p>
                  <h1 className="tw:mt-3 tw:text-5xl tw:font-semibold tw:tracking-normal tw:tablet:text-7xl">
                    conference 2026
                  </h1>
                </div>
                <div className="tw:max-w-2xl tw:space-y-3 tw:text-neutral-900">
                  <p className="tw:font-yk tw:text-2xl tw:font-semibold tw:tracking-normal tw:tablet:text-3xl">
                    Coming in early December
                  </p>
                  <p className="tw:text-base tw:leading-7 tw:tablet:text-lg">
                    We are preparing the next sciwork gathering for people
                    working across science, engineering, code, and open source.
                  </p>
                  <p className="tw:font-yk tw:text-base tw:font-semibold tw:tracking-[0.08em] tw:text-orange-500 tw:uppercase tw:tablet:text-lg">
                    More details will be announced soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
