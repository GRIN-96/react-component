"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Styles from "../page.module.scss";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function Toggle() {
    const {theme, setTheme} = useTheme();
    const [isDarkmode, setIsDarkmode] = useState(theme === 'light' ? false : true);

    const toggleSwitch = () => {
        setIsDarkmode(!isDarkmode);
        handleTheme();
    }

    const handleTheme = () => {
        if(theme === 'light') {
            setTheme("dark");
        }else {
            setTheme("light");
        }
    }

    return (
        <main className={Styles.toggle_container}>
            <Link href="./" className={Styles.back_button}>
                뒤로가기
            </Link>
            <div className={Styles.toggle_body}>
                <div
                    className={isDarkmode ? Styles.switch_darkMode : Styles.switch}
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
                            <FiSun/>    
                            <span>Light</span>
                        </div>
                        <div data-selected={isDarkmode} className={Styles.mode}>
                            <FiMoon/>
                            <span>Dark</span>
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
