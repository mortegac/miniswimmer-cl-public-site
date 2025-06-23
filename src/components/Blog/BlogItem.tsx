import React from "react";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  return (
    <article className="group overflow-hidden rounded-[15px] bg-white shadow-dropdown dark:bg-gray-dark">
      <Link
        href={blog?.url}
         target="_blank"
        className="block overflow-hidden relative h-[200px]"
      >
        <Image
          src={blog?.mainImage}
          alt={blog?.title}
          className="duration-300 ease-in group-hover:rotate-6 group-hover:scale-125 object-cover object-center"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <Link
        href={blog?.url}
         target="_blank"
        className="block overflow-hidden relative"
      >
      <div className="px-6 py-7">
        <h3 className="mb-4 font-satoshi text-custom-2xl font-bold -tracking-[0.3px] text-black hover:text-primary dark:text-white">
          {blog?.title.substring(0, 80)}...
          
        </h3>
        <p className="w-full max-w-[272px] dark:text-gray-5">
          {blog?.metadata.substring(0, 200)}...
        </p>
        
      </div>
      </Link>
    </article>
  );
};

export default BlogItem;
