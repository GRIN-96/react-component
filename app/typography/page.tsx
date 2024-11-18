import Link from "next/link";
import Word from "../../components/Word";
import Styles from "../page.module.scss";

const paragraph =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

export default function Home() {
    return (
        <main className={Styles.linkContainer}>
            <Link href="./" className={Styles.link}>
                뒤로가기
            </Link>
            <div style={{ height: "50vh" }}></div>
            {/* <Paragraph value={paragraph} /> */}
            <Word value={paragraph} />
            <div style={{ height: "150vh" }}></div>
        </main>
    );
}
