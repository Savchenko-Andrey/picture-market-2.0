'use client';
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        overflow: "hidden",
      }}
    >
      <h1>Page not found (:</h1>
      <p className={styles.error_text} onClick={() => router.push("/")}>
        Home page
      </p>
    </div>
  );
}
