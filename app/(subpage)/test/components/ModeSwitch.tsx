"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Styles from "@/app/page.module.scss";

export default function ModeSwitch() {
    const { theme, setTheme } = useTheme();
    const [isDarkmode, setIsDarkmode] = useState(
        theme === "light" ? false : true
    );
    const [mounted, setMounted] = useState(false);

    const [open, setOpen] = useState(false);
    const toggle_mode = () => setOpen(!open);

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
        <div>
        <motion.div 
            className={Styles.switch_container}
            onClick={toggle_mode}
            initial= {{ scaleX: 1 }}
            animate= {{ scaleX: open ? 0 : 1 }}
            transition={{delay: open ? 0 : 0.3}}
        >   
            <div 
                className={isDarkmode ? Styles.mini_dark_button : Styles.mini_right_button}
            >
                {isDarkmode ? <p><FiMoon /></p> : <p><FiSun /></p>}
            </div>
            {/* <div
                data-selected={!isDarkmode}
                className={Styles.mode}
            >
                <FiSun />
            </div>
            <div data-selected={isDarkmode} className={Styles.mode}>
                <FiMoon />
            </div> */}
        </motion.div>
        <motion.div 
            className={Styles.switch_container}
            initial= {{ scaleX: 0 }}
            animate= {{ scaleX: open ? 1 : 0 }}
            onMouseLeave={toggle_mode}
            transition={{ spring: 3 }}
            style={{
                transformOrigin: "right", 
            }}
        >
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
        </motion.div>
        </div>
    );
}

const Toggle = ({
}: {
}) => {
    return (
        <motion.div>
            
        </motion.div>
    );
};
