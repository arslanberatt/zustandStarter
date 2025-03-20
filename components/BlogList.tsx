"use client";
import React, { useEffect, useState } from "react";

const BlogList = () => {
  interface Post {
    id: number;
    title: string;
    content: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://192.168.1.102:3000/api/blog");
      const data = await res.json();
      setPosts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: Post) => (
          <li key={post.id}>
            <h2 className="text-xl">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
