

import { getPostBySlug } from '@/lib/posts';

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <article dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </main>
  );
}










