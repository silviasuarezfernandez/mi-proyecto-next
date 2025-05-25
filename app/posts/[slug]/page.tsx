import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import Link from 'next/link'; // IMPORTA Link aquí arriba, no dentro del JSX

type Params = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content/posts');
  const filenames = await fs.readdir(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: data.title || 'Post',
      description: `Artículo del blog: ${data.title}`,
    };
  } catch {
    return {
      title: 'Post no encontrado',
    };
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const html = marked(content);

    return (
      <article>
        <h1>{data.title}</h1>
        <p><em>{new Date(data.date).toLocaleDateString()}</em></p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <p>
          {/* se usa Link para navegar de vuelta a posts */}
          <Link href="/posts">← Volver a posts</Link>
        </p>
      </article>
    );
  } catch {
    notFound();
  }
}


  
