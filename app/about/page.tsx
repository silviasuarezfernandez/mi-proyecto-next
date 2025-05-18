import React from 'react';
import Image from 'next/image';
import styles from './About.module.css';

export default function AboutPage() {
  return (
    <main>
      <h1>Acerca de Nosotros</h1>
      <p>
        Desde 1997 hemos sido un punto de encuentro para quienes buscan inspiración, conocimiento y aventura entre las páginas de un libro. Nacimos con el sueño de acercar la literatura a nuestra comunidad de soñadores. Lo que comenzó como un pequeño rincón de libros se ha convertido en un espacio vibrante donde cada lector encuentra su próxima gran historia.
      </p>
      <p>
        Somos más que una librería, somos un lugar de reunión para los amantes de los libros. Por eso, recibimos a los autores de tus obras favoritas, brindándote la oportunidad de conversar con ellos y obtener una firma personalizada en tu ejemplar.
      </p>

      <blockquote className={styles.quote}>
        &quot;EL LIBRO ES FUERZA, ES VALOR, ES PODER, ES ALIMENTO; ANTORCHA DEL PENSAMIENTO Y MANANTIAL DEL AMOR.&quot;
      </blockquote>

      <p className={styles.author}>— Rubén Darío</p>

      <Image
        src="/corazon.png"
        alt="Corazón"
        width={600}   
        height={300}
      />
    </main>
  );
}








