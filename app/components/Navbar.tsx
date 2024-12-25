"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Server-side rendering sırasında hata önlemek için
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-[1216px] h-24 flex items-center justify-between ">
      {/* logo kısmı */}
      <Link href={"/"}>
        <Image
          src={theme == "light" ? "/assets/Logo.png" : "/assets/dark-logo.png"}
          alt="Meta Blog Logo"
          width="158"
          height="35"
        />
      </Link>

      {/* Linkler burda olcak */}

      <ul className="flex items-center justify-between gap-10 text-lightText ">
        <Link href={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href={"/BlogList"}>
          <li className="cursor-pointer">Blog</li>
        </Link>
        <li className="cursor-pointer">Single Post</li>
        <li className="cursor-pointer">Pages</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* arama / theme */}

      <div className="flex gap-10 items-center justify-center ">
        <div className="flex  border-[#242535] bg-lightButton rounded-md items-center justify-between px-2 dark:bg-[#242535]">
          <input
            type="text"
            className="outline-none bg-lightButton h-9 dark:bg-[#242535] "
            placeholder="Search"
          />
          <IoIosSearch />
        </div>
        <div
          className="w-12 h-7 bg-lightButton rounded-full flex items-center dark:bg-[#4B6BFB] dark:justify-end "
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Image
            src="/assets/light.png"
            width={24}
            height={24}
            alt="light Image Icon"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
