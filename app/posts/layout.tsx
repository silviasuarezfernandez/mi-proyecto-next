
import { ReactNode } from 'react';
import Link from 'next/link';
import './layout.css';  // Importa el CSS externo

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="posts-section">
      <header className="posts-header">
        <h2>Sección Blog</h2>
        <nav>
          <Link href="/">Inicio</Link> | <Link href="/posts">Posts</Link>
        </nav>
      </header>
      <main>{children}</main>
    </section>
  );
}


