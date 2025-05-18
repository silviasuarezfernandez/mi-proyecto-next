import React from 'react';
import styles from './privacy.module.css';

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.container}>
      <h1>Política de Privacidad</h1>
      <p>
        En Librería Acuarel valoramos tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información personal.
      </p>

      <h2>1. Información que recopilamos</h2>
      <p>
        Podemos recopilar información personal como nombre, dirección de correo electrónico y datos de contacto cuando nos los proporcionas de forma voluntaria.
      </p>

      <h2>2. Uso de la información</h2>
      <p>
        Utilizamos tus datos únicamente para responder a tus consultas, procesar solicitudes o enviarte información relacionada con nuestros servicios.
      </p>

      <h2>3. Protección de datos</h2>
      <p>
        Implementamos medidas de seguridad para proteger tu información. No compartimos tus datos con terceros sin tu consentimiento.
      </p>

      <h2>4. Derechos del usuario</h2>
      <p>
        Tienes derecho a acceder, rectificar o eliminar tus datos personales en cualquier momento. Para ello, puedes escribirnos a <a href="mailto:LIBRERIA.ACUAREL@gmail.com">LIBRERIA.ACUAREL@gmail.com</a>.
      </p>

      <h2>5. Cambios en esta política</h2>
      <p>
        Esta política puede actualizarse ocasionalmente. Recomendamos revisar esta página periódicamente.
      </p>

      <p>Última actualización: mayo 2025</p>
    </main>
  );
}



