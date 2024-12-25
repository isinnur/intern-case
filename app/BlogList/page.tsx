"use client";

import Image from "next/image";
import Card from "../components/Card";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const BlogList = () => {
  const pathname = usePathname();
  const [blogs, setBlogs] = useState<Post[]>([]);

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    fetch(`${baseUrl}/api/posts/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        return res.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, []);

  return (
    <div className="w-340 mt-12 flex items-center justify-center flex-col ">
      <h2 className="font-semibold text-3xl ">Page Title</h2>
      <div className="flex text-spanText gap-4 text-sm mb-12 mt-2 justify-between">
        <span
          className={`${
            pathname === "/BlogList" ? "font-semibold" : "font-normal"
          }`}
        >
          Home
        </span>
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
        {blogs.map((card) => (
          <Link key={card.id} href={`/BlogList/${card.id}`}>
            <Card title={card.title} content={card.content} />
          </Link>
        ))}
      </div>
      <div className=" mb-52">
        <button className="border border-spacing-1 border-[#E8E8EA] dark:border-[#242535] py-3 px-5 rounded-md text-spanText">
          Load More
        </button>
      </div>
    </div>
  );
};

export default BlogList;
