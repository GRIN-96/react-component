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
        </main>
    );
}
