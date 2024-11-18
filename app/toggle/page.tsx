"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Styles from "../page.module.scss";

export default function Toggle() {
    const [isDarkmode, setIsDarkmode] = useState(false);

    const toggleSwitch = () => setIsDarkmode(!isDarkmode);

    return (
        <main className={Styles.toggle_container}>
            <div className={Styles.toggle_body}>
                <div
                    className={Styles.switch}
                    data-darkmode={isDarkmode}
                    onClick={toggleSwitch}
                >
                    <motion.div
                        className={Styles.handle}
                        layout
                        transition={spring}
                    />
                    <div className={Styles.innerWrapper}>
                        <div
                            data-selected={!isDarkmode}
                            className={Styles.mode}
                        >
                            Light
                        </div>
                        <div data-selected={isDarkmode} className={Styles.mode}>
                            Dark
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 50,
};
