"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Styles from "@/app/page.module.scss";
import { useRef } from "react";

export default function Paragraph({ value, ...props }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const words = value ? value.split("/") : [];
    return (
        <section
            ref={ref}
            className={Styles.wrapParagraph}
            style={{ height: "300vh" }}
            {...props}
        >
            <p className={Styles.paragraph}>
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + 1 / words.length;
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
        </section>
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
