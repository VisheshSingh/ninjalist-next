import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninja' />
      </Head>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi soluta
        eos sed architecto dolorem possimus voluptatum, tenetur beatae
        asperiores exercitationem.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe aliquam
        quia impedit iure non amet excepturi aperiam voluptatum vero? Tenetur
        magni nulla commodi provident soluta unde tempora expedita hic alias?
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}
