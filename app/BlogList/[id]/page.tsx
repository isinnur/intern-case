"use client";
import BlogContent from "@/app/components/BlogContent";
// import BlogContent from "@/app/components/BlogContent";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const SingleBlog = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
    fetch(`${baseUrl}/api/posts/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }
        return res.json();
      })
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  return (
    <div className="flex w-[800px] mb-[135px] font-semibold">
      <div>
        <div>
          <span className="bg-blue-600 text-white p-3 rounded-md w-24 h-7 flex items-center justify-center font-medium">
            Technology
          </span>
          <h1 className="text-4xl mt-4">{post?.title}</h1>
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
          <BlogContent content={post?.content} />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
