import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>boardgaming.icu</title>
        <meta name="description" content="boardgaming.icu" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          boardgaming.icu
        </h1>
        <p>Coming soon.</p>
        <a href="https://discord.gg/WJnSz8Sjbj">Join the discord</a>
      </main>
    </div>
  )
}
