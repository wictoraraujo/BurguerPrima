import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <h1>Teste Header</h1>
      </header>
      <main className={styles.main}>
        <h2>Teste Main</h2>
      </main>
      <footer className={styles.footer}>
        <h2>Teste Footer</h2>
      </footer>
    </div>
  );
}
