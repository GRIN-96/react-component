import { ReactNode } from "react";

import Styles from "../page.module.scss";
import Link from "next/link";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className={Styles.linkContainer}>
            <Link href="./" className={Styles.back_button}>
                뒤로가기
            </Link>
            {children}
        </main>
    );
}
