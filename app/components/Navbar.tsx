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

      <ul className="flex  items-center justify-between gap-10 text-lightText ">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Single Post</li>
        <li className="cursor-pointer">Pages</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* arama / theme */}
      <div className=" flex gap-10 w-300">
        <div className="flex">
          <input
            type="text"
            className="bg-lightButton p-3 pr-6 rounded-md w-full outline-none"
            placeholder="Search"
          />
          <IoIosSearch className="text-lightText" />
        </div>
        <div className="w-20 h-10 bg-lightButton rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
