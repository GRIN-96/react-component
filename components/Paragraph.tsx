"use client";
import React, { useEffect, useRef } from "react";
import Styles from "../app/page.module.scss";
import { useScroll, motion } from "framer-motion";

export default function Word({ value }: { value: string }) {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.9", "start 0.25"],
    });

    return (
        <motion.p
            className={Styles.paragraph}
            ref={element}
            style={{ opacity: scrollYProgress }}
        >
            {value}
        </motion.p>
    );
}
