import Link from "next/link";

import styles from "./page.module.css";
import { projects } from "../lib/common";

export default function Home() {
  return (
    <main>
      <h1>Hello!</h1>
      <ProjectNav />
    </main>
  );
}

function ProjectNav() {
  const handleProjectNav = function (e: React.MouseEvent) {};

  return (
    <section className={styles.projectNavSection}>
      <h2 hidden>Navigate My Projects</h2>
      {Object.keys(projects).map((key) => {
        return (
          <div className={styles.projectItem}>
            <Link className={styles.projectLink} href={projects[key]}>
              <p className={styles.projectName}>{key}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
}
