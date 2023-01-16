import * as React from "react";
import {
  FaAngleDown,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import UnstyledLink from "@/components/links/UnstyledLink";
import Typography from "@/components/typography/Typography";

export default function Footer() {
  const [showEvents, setShowEvents] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showTryOut, setShowTryOut] = React.useState(false);

  const toggleShowEvents = () => {
    setShowEvents((prev) => !prev);
  };

  const toggleShowAbout = () => {
    setShowAbout((prev) => !prev);
  };
  const toggleShowTryOut = () => {
    setShowTryOut((prev) => !prev);
  };

  return (
    <footer className="relative z-50 w-full bg-neutral-900">
      <div className="mx-auto w-[95%] md:w-10/12">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div>Image Place</div>
          <div className="flex flex-col items-end justify-center space-y-0 md:space-y-4">
            <Typography
              className="text-[12px] font-semibold leading-[20px] text-neutral-100 md:text-[20px] md:leading-[24px]"
              variant="title"
            >
              Temukan kami di sosial media!
            </Typography>
            <div className="flex items-center justify-between space-x-2 text-neutral-100 md:space-x-4">
              <UnstyledLink href="/">
                <FaInstagram className="w-4 md:w-fit" size={32} />
              </UnstyledLink>
              <UnstyledLink href="/">
                <FaYoutube className="w-4 md:w-fit" size={32} />
              </UnstyledLink>
              <UnstyledLink href="/">
                <FaTwitter className="w-4 md:w-fit" size={32} />
              </UnstyledLink>
              <UnstyledLink href="/">
                <FaTiktok className="w-4 md:w-fit" size={32} />
              </UnstyledLink>
            </div>
          </div>
        </div>
        <hr className="my-3 h-[2px] bg-neutral-100 md:h-1" />
        <div className="flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:items-start md:space-y-0">
          <div className="flex flex-col items-center justify-center space-y-3 text-white md:items-start">
            <Typography
              onClick={toggleShowAbout}
              variant="title"
              className="mx-auto flex items-center gap-1 font-semibold md:mx-0"
            >
              Tentang Kami
              <FaAngleDown
                className={`mt-1 ${
                  showAbout ? "rotate-180" : "rotate-0"
                } block text-2xl transition duration-150 md:hidden`}
              />
            </Typography>
            <div
              className={`${
                showAbout ? "flex" : "hidden opacity-0 md:block md:opacity-100"
              } w-full flex-col transition-all duration-1000 md:w-fit`}
            >
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink href="/" className="mx-auto text-lg md:mx-0">
                  ITS EXPO
                </UnstyledLink>
              </div>
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink
                  href="/fasilitas"
                  className="mx-auto text-lg md:mx-0"
                >
                  Lorem
                </UnstyledLink>
              </div>
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink
                  href="/coming-soon"
                  className="mx-auto text-lg md:mx-0"
                >
                  Lorem
                </UnstyledLink>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 text-white md:items-start">
            <Typography
              onClick={toggleShowEvents}
              variant="title"
              className="mx-auto flex items-center gap-1 font-semibold md:mx-0"
            >
              Lorem
              <FaAngleDown
                className={`mt-1 ${
                  showEvents ? "rotate-180" : "rotate-0"
                } block text-2xl transition duration-150 md:hidden`}
              />
            </Typography>
            <div
              className={`${
                showEvents ? "flex" : "hidden opacity-0 md:block md:opacity-100"
              } w-full flex-col transition-all duration-1000 md:w-fit`}
            >
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink
                  href="/eventual"
                  className="mx-auto text-lg md:mx-0"
                >
                  Lorem
                </UnstyledLink>
              </div>
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink
                  href="/eventual"
                  className="mx-auto text-lg md:mx-0"
                >
                  Lorem
                </UnstyledLink>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3 text-white md:items-start">
            <Typography
              onClick={toggleShowTryOut}
              variant="title"
              className="mx-auto flex items-center gap-1 font-semibold md:mx-0"
            >
              Lorem
              <FaAngleDown
                className={`mt-1 ${
                  showTryOut ? "rotate-180" : "rotate-0"
                } block text-2xl transition duration-150 md:hidden`}
              />
            </Typography>
            <div
              className={`${
                showTryOut ? "flex" : "hidden opacity-0 md:block md:opacity-100"
              } w-full flex-col transition-all duration-1000 md:w-fit`}
            >
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink
                  href="/open-campus"
                  className="mx-auto text-lg md:mx-0"
                >
                  Lorem
                </UnstyledLink>
              </div>
              <div className="flex h-10 gap-5 px-7 md:pl-0">
                <UnstyledLink
                  href="/welcome-forda"
                  className="mx-auto text-lg md:mx-0"
                >
                  Lorem
                </UnstyledLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-0 text-white md:items-start md:space-y-3">
            <Typography
              onClick={toggleShowEvents}
              variant="title"
              className="mx-auto hidden items-center gap-1 font-semibold md:mx-0 md:flex"
            >
              Lorem
            </Typography>

            <div className="flex h-8 px-7 md:px-0">
              <UnstyledLink
                href="/merchandise"
                className="mx-auto flex items-center gap-2 text-lg font-semibold md:ml-0"
              >
                Lorem <FiExternalLink />
              </UnstyledLink>
            </div>
          </div>
        </div>

        <div className="py-12 text-center font-medium text-white">
          <Typography variant="caption">
            &copy; Copyright ITS EXPO 2023. All Rights Reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
}
