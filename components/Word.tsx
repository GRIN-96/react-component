"use client";
import React, { useEffect, useRef } from "react";
import Styles from "../app/page.module.scss";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";

export default function Paragraph({ value }) {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.3", "start 0.1"],
    });

    const words = value ? value.split("/") : [];
    return (
        <p className={Styles.paragraph} ref={element}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                console.log(start, end);
                return (
                    <Word
                        key={i}
                        range={[start, end]}
                        progress={scrollYProgress}
                    >
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word = ({
    children,
    range,
    progress,
}: {
    children: string;
    range: number[];
    progress: MotionValue<number>;
}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className={Styles.word}>
            <span className={Styles.shadow}>{children}</span>

            <motion.span style={{ opacity }}>{children}</motion.span>
        </span>
    );
};
