import Image from "next/image";
import Card from "../components/Card";

const BlogList = () => {
  return (
    <div className="w-340 mt-12 flex items-center justify-center flex-col">
      <h2 className="font-semibold text-3xl ">Page Title</h2>
      <div className="flex text-spanText gap-4 text-sm mb-12 mt-2 justify-between">
        <span>Home</span>
        <span>|</span>
        <span>Link One</span>
      </div>

      <div className="relative">
        <Image
          src="/assets/heroImg.png"
          width="1216"
          height="450"
          alt="Hero image"
        />
        <div className="flex flex-col absolute bottom-10 left-10 text-white gap-4">
          <span className="bg-blue-600 text-white p-3 rounded-md w-24 h-7 flex items-center justify-center font-medium">
            Technology
          </span>

          <span className="text-3xl ">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </span>
          <div className="flex items-center gap-5 ">
            <span className="flex items-center justify-center gap-3">
              <Image
                src="/assets/profile.png"
                width={36}
                height={36}
                alt="Person Image"
              />
              Tracey Wilson
            </span>
            <span>August 20, 2022</span>
          </div>
        </div>
      </div>
      <div className="my-12 grid grid-cols-3 gap-5 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className=" mb-52">
        <button className="border border-spacing-1 border-[#E8E8EA] py-3 px-5 rounded-md text-spanText">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;
