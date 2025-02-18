import Link from 'next/link';
import React from 'react';
import { to } from './../../../.next/static/chunks/[turbopack]_browser_dev_hmr-client_d6d8d4._';

const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return data;
};

const PostAll = async () => {
  const data = await getPosts();
  return (
    <div>
      <h2>All Posts</h2>
      <div className="grid grid-cols-4 gap-10">
        {data.map(post => (
          <div className="border border-gray-300 rounded-md p-4" key={post.id}>
            <h3>{post.title}</h3>
            <Link href={`/posts/${post.id}`} className="p-2 bg-green-500">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostAll;
