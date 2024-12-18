import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-[1216px] h-24 flex items-center justify-between ">
      {/* logo kısmı */}
      <Image
        src="/assets/Logo.png"
        alt="Meta Blog Logo"
        width="158"
        height="35"
      />

      {/* Linkler burda olcak */}

      <ul className="flex items-center justify-between gap-10 text-lightText ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Single Post</li>
        <li className="cursor-pointer">Pages</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* arama / theme */}

      <div className="flex gap-10 items-center justify-center">
        <div className="flex border bg-lightButton rounded-md items-center justify-between px-2">
          <input
            type="text"
            className="outline-none bg-lightButton h-9"
            placeholder="Search"
          />
          <IoIosSearch />
        </div>
        <div className="w-12 h-7 bg-lightButton rounded-full flex items-center">
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
