import Styles from "../app/page.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <main className={Styles.linkContainer}>
            <Link href="./typography/" className={Styles.link}>
                Typography
            </Link>
            <Link href="./pinMenu/" className={Styles.link}>
                Spotlight
            </Link>
            <Link href="./scroll/" className={Styles.link}>
                Scroll
            </Link>
            <Link href="./toggle/" className={Styles.link}>
                Toggle Button
            </Link>
            <Link href="./slide/" className={Styles.link}>
                Slide Page-flip
            </Link>
            <Link href="./slide2/" className={Styles.link}>
                Slide Page
            </Link>
            <Link href="./scrollPage/" className={Styles.link}>
                Sliding Page
            </Link>
            <Link href="./mail/" className={Styles.link}>
                mail Page
            </Link>
        </main>
    );
}
