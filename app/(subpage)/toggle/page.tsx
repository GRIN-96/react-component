"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Styles from "../../page.module.scss";
import { FiSun, FiMoon } from "react-icons/fi";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Toggle() {
    const { theme, setTheme } = useTheme();
    const [isDarkmode, setIsDarkmode] = useState(
        theme === "light" ? false : true
    );
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // 클라이언트 렌더링 후 상태 설정
        setMounted(true);
    }, []);

    const toggleSwitch = () => {
        setIsDarkmode(!isDarkmode);
        handleTheme();
    };

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    if (!mounted) {
        // 서버와의 불일치를 방지
        return null;
    }

    return (
        <main className={Styles.toggle_container}>
            <div className={Styles.toggle_body}>
                <div
                    className={
                        isDarkmode ? Styles.switch_darkMode : Styles.switch
                    }
                    data-darkmode={isDarkmode}
                    onClick={toggleSwitch}
                >
                    <motion.div
                        className={Styles.handle}
                        layout
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 50,
                        }}
                    />
                    <div className={Styles.innerWrapper}>
                        <div
                            data-selected={!isDarkmode}
                            className={Styles.mode}
                        >
                            <FiSun />
                            <span>Light</span>
                        </div>
                        <div data-selected={isDarkmode} className={Styles.mode}>
                            <FiMoon />
                            <span>Dark</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
