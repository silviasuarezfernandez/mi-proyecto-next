import '../styles/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'Mi Proyecto Next.js',
  description: 'Un sitio hecho con Next.js',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}




