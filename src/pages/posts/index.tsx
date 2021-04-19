import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with Lerna and Yarn Workspaces</strong>
            <p>Text here</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with Lerna and Yarn Workspaces</strong>
            <p>Text here</p>
          </a>
          <a href="">
            <time>12 de março de 2021</time>
            <strong>Creating a monorepo with Lerna and Yarn Workspaces</strong>
            <p>Text here</p>
          </a>
        </div>
      </main>
    </>
  );
}