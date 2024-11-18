"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Styles from "../page.module.scss";

export default function Toggle() {
    const [isOn, setIsOn] = useState(false);
  
    const toggleSwitch = () => setIsOn(!isOn);
  
    return (
        <main className={Styles.toggle_container}>
            <div className={Styles.toggle_body}>
                <div className={Styles.switch} data-isOn={isOn} onClick={toggleSwitch}>
                    <div>Light</div>
                    <motion.div className={Styles.handle} layout transition={spring} />
                    <div>Dark</div>
                </div>
            </div>
        </main>
    );
}
  
const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
};
  