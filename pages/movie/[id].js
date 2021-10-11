import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { apiKey } from '../../lib/tmdb';
import styles from '../../styles/Home.module.css';

export default function MovieItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Filme</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {info.title}
        </h1>

        <Link href="/busca">Ir para a Busca</Link>

        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="600" />

        <p>{info.overview}</p>

        <p>Nota: {info.vote_average}</p>

        <p>Data de Lançamento: {info.release_date}</p>

        <p>Site Oficial: <a href={info.homepage}>{info.homepage}</a></p>

       
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
  const json = await res.json();

  console.log(json);

  return {
    props: {
      info: json.info
    }
  };
}

