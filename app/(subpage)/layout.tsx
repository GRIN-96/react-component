import { ReactNode } from "react";

import Styles from "../page.module.scss";

export default function layout({ children }: { children: ReactNode }) {
    return <main className={Styles.linkContainer}>{children}</main>;
}
