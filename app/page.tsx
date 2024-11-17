import Styles from "../app/page.module.scss";
import Link from "next/link";

export default function Home() {
    return (
        <main className={Styles.linkContainer}>
            <Link href="./textOpacity/" className={Styles.link}>
                Text Gradient Opacity
            </Link>
            <Link href="./pinMenu/" className={Styles.link}>
                Spotlight
            </Link>
        </main>
    );
}
