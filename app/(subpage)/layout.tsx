import { ReactNode } from "react";

import Styles from "../page.module.scss";
import Link from "next/link";
import ModeSwitch from "./scrollPage/components/ModeSwitch";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className={Styles.linkContainer}>
            <div className={Styles.header_button_layout}>
                {/* <Link href="./" >
                    뒤로가기
                </Link> */}
            </div>
            <ModeSwitch />
            <a className={Styles.scroll_icon} href="#"></a>
            {children}
        </main>
    );
}
