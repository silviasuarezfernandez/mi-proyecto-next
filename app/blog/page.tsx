

import React from 'react';
import Link from 'next/link';
import { getPosts } from '@/lib/posts';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <br />
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
