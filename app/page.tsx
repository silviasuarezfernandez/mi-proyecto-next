import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <h1>Bienvenido a la página de inicio de la Librería Acuarel</h1>

      <Image
        src="/libro.png"
        alt="Foto de bienvenida a Librería Acuarel"
        width={600}
        height={400}
      />

      <p>¡Este es mi primer proyecto con Next.js!</p>
    </main>
  );
}


