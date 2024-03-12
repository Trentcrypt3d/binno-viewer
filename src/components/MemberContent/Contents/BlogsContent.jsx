import React from "react";
import { blogs } from "../ContentData.jsx";
import Avatar from "@mui/material/Avatar";

function BlogsContent() {
  return (
    <>
      <div className="flex">
        {blogs.map((blog) => (
          // cards
          <div
            className="bg-white rounded-lg flex flex-col mx-5 p-5 max-w-30"
            key={blog.id}
          >
            {/* title description container */}
            <div className="flex flex-col">
              <h2 className="text-black font-bold text-xl mb-1">
                {blog.blogTitle}
              </h2>
              <p className="text-black text-opacity-80 mb-1 text-base">
                {blog.blogDescription}
              </p>
            </div>
            <p className="text-black text-opacity-60">{blog.date}</p>
            {/* footer container */}
            <div className="flex items-center flex-row m-1 mt-3">
              <Avatar src={blog.profilePic} alt="profile picture" />
              <h2 className="text-black mx-2 font-bold">{blog.username}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogsContent;
