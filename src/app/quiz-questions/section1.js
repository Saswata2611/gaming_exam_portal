import styles from "../../styles/quiz-question/section1.module.css";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";

export default function Section1() {
    return (
        <main className={styles.main}>

        <img src="/cross.png" alt="404" className={`${styles.cross} ${styles.top}`} />
        <img src="/cross.png" alt="404" className={`${styles.cross} ${styles.bottom}`} />

        <div className={`${styles.bar} ${styles.left}`}></div>

        <Section2 />
        <Section3 />
        <Section4 />

        <img src="/console.png" alt="404" className={styles.console} />

        </main>
    );
}