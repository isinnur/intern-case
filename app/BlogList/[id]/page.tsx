import BlogContent from "@/app/components/BlogContent";
import Image from "next/image";
import React from "react";

const SingleBlog = () => {
  return (
    <div className="flex w-[800px] mb-[135px] font-semibold">
      <div>
        <div>
          <span className="bg-blue-600 text-white p-3 rounded-md w-24 h-7 flex items-center justify-center font-medium">
            Technology
          </span>
          <h1 className="text-4xl mt-4">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
        </div>

        <div className="mt-5 flex items-center gap-5 font-normal text-spanText">
          <span className="flex items-center gap-3">
            <Image
              src="/assets/blogPerson1.png"
              width={36}
              height={36}
              alt="Person Image"
            />
            Tracey Wilson
          </span>
          <span>August 20, 2022</span>
        </div>
        <div className="font-normal">
          <BlogContent />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
