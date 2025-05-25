'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logotipo.jpg"   
            alt="Logo"
            width={120}
            height={50}
          />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Inicio</Link> |{' '}
        <Link href="/about">Acerca de</Link> |{' '}
        <Link href="/contact">Contacto</Link> |{' '}
        <Link href="/blog">Blog</Link> |{' '}
        <Link href="/privacy">Política de Privacidad</Link>
      </nav>
    </header>
  );
}




