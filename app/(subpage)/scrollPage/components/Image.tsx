import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Styles from "../../../page.module.scss";

export default function Images({ text, url, ref, style, ...props }) {
    // const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

    return (
        <div ref={ref} style={{ minWidth: "max-content", ...style }} {...props}>
            <img
                src={url}
                alt={text}
                style={{
                    height: "auto",
                    maxHeight: "70vh",
                    borderRadius: "5px",
                    objectFit: "cover",
                }}
            />
            <h2>{text}</h2>
        </div>
    );
}
