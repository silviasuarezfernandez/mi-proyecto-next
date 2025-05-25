import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMetadata = {
  slug: string;
  title: string;
  date: string;
};

export default async function PostsPage() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const filenames = await fs.readdir(postsDir);

  const posts: PostMetadata[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data } = matter(fileContent);
      const slug = filename.replace('.md', '');
      return {
        slug,
        title: data.title,
        date: data.date,
      };
    })
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>
                <strong>{post.title}</strong> <br />
                <small>{new Date(post.date).toLocaleDateString()}</small>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}





