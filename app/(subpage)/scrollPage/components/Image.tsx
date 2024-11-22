import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Styles from "../../../page.module.scss";

export default function Images({ text, url }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

    return (
        <section>
            <div ref={ref}>
                <img src={url} alt={text} />
            </div>
            <motion.h2 style={{ y }}>{text}</motion.h2>
        </section>
    );
}
