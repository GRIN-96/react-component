"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Styles from "@/app/page.module.scss";
import { useEffect, useRef, useState } from "react";

// 애니메이션 Variants 정의
const introduceVariants = {
    hidden: {
        opacity: 0,
        y: 100, // 아래에서 위로 올라오는 효과
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        y: -100, // 위로 사라지는 효과
        transition: { duration: 0.5, ease: "easeIn" },
    },
};

export default function Paragraph({ value, ...props }) {
    const [inView, setInView] = useState(false);
    const paragraphRef = useRef(null);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const words = value ? value.split("/") : [];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.8 }
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => {
            if (paragraphRef.current) {
                observer.unobserve(paragraphRef.current);
            }
        };
    }, []);

    return (
        <motion.section
            ref={ref}
            className={Styles.wrapParagraph}
            style={{ height: "300vh" }}
            initial={{ y: "-1000", opacity: 0 }}
            animate={
                inView ? { opacity: 1, fontSize: "3rem" } : { opacity: 0 }
            }
            {...props}
        >
            <p 
                ref={paragraphRef}
                className={Styles.paragraph}
            >
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
        </motion.section>
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
