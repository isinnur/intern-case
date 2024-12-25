"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-[#f6f6f7] w-full h-[500px] flex flex-col  items-center justify-between dark:bg-[#181A2A]">
      <div className=" w-[1216px] h-[254px] flex  justify-between items-center gap-5 mt-16">
        <div className="text-lg">
          <span className="font-semibold ">About</span>
          <p className="text-spanText text-base mt-3">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt
            ut labore <br /> et dolore magna aliqua. Ut enim ad <br /> minim
            veniam
          </p>
          <div className="text-base flex flex-col mt-6 font-semibold">
            <span>
              Email : <span className="text-spanText">info@jstemplate.net</span>
            </span>
            <span>
              Phone : <span className="text-spanText">880 123 456 789</span>
            </span>
          </div>
        </div>
        <div className="flex gap-20 ">
          <div className="flex flex-col">
            <span className="mb-6 font-semibold text-lg">Quick Link</span>
            <div className="flex flex-col text-[#3B3C4A] gap-2">
              <span>Home</span>
              <span>About</span>
              <span>Blog</span>
              <span>Archived</span>
              <span>Author</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="mb-6 font-semibold text-lg">Category</span>
            <div className="flex flex-col text-[#3B3C4A] gap-2">
              <span>Lifestyle</span>
              <span>Technology</span>
              <span>Travel</span>
              <span>Business</span>
              <span>Economy</span>
              <span>Sports</span>
            </div>
          </div>
        </div>
        <div className="w-[392px] h-[254px] bg-white flex flex-col items-center rounded-xl dark:bg-[#242535]">
          <span className="text-xl mb-2 mt-8">Weekly Newsletter</span>
          <p className="text-spanText mb-8">
            Get blog articles and offers via email
          </p>
          <div className="flex border items-center justify-between px-4 w-[320px] h-12 rounded-md mb-2 dark:bg-[#181A2A] border-none">
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none bg-transparent "
            />
            <CiMail className="text-xl" />
          </div>
          <button className="w-[320px] h-12 bg-[#4B6BFB] text-white rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="w-[1216px] h-[118px] flex justify-between items-center border-t dark:border-t-[#242535]">
        <div className="flex gap-2">
          <div>
            <Image
              src={
                theme == "light"
                  ? "/assets/Logo2.png"
                  : "/assets/dark-bottom-logo.png"
              }
              width={48}
              height={48}
              alt="Logo image"
            />
          </div>
          <div className="flex flex-col">
            <Image
              src="/assets/MetaBlog.png"
              width={94}
              height={28}
              alt="Logo name"
            />

            <span className="text-[#3B3C4A]">
              © JS Template 2023. All Rights Reserved.
            </span>
          </div>
        </div>
        <div className="flex gap-4 text-[#3B3C4A]">
          <span>Terms of Use</span>
          <span>|</span>
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
