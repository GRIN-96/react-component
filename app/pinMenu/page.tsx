"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Styles from "../page.module.scss";

export default function Spotlight() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return (
        // <main className={Styles.linkContainer}>
        //     <Link href="./" className={Styles.link}>
        //         뒤로가기
        //     </Link>
        // </main>
        <div className={Styles.container} onMouseMove={handleMouseMove}>
            <motion.div
                className={Styles.spotlight}
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            <div className={Styles.content}>
                <h1>Welcome to the Spotlight</h1>
                <p>Move your mouse to see the spotlight in action.</p>
            </div>
        </div>
    );
}
