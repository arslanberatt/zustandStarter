"use client";
import { useEffect, useState } from "react";

const BlogPage = () => {
  interface Post {
    id: number;
    title: string;
    content: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/api/blog`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fetch error:", err));
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

export default BlogPage;
