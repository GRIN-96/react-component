"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
    children: React.ReactNode;
    width?: number;
    height?: number;
    distance?: number;
    onClick?: () => void; // onClick 이벤트 추가
};

export default function MagneticButton({
    children,
    width = 200,
    height = 60,
    distance = 0.3,
    onClick, // onClick 받기
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } =
            ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * distance, y: middleY * distance });
    };

    const resetPosition = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.div
            ref={ref}
            style={{
                width,
                height,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#4f46e5",
                color: "#fff",
                borderRadius: "12px",
                cursor: "pointer",
                position: "relative",
                fontSize: "16px",
                fontWeight: "bold",
                overflow: "hidden",
            }}
            onMouseMove={handleMouse}
            onMouseLeave={resetPosition}
            onClick={onClick} // 클릭 이벤트 추가
            animate={{ x, y }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            {children}
        </motion.div>
    );
}
