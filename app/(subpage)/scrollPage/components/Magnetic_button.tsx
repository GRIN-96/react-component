"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

type FramerProps = {
    children: React.ReactNode;
};

export default function Framer({ children }: FramerProps) {
    const ref = useRef<HTMLDivElement | null>(null); // null 초기화
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return; // ref가 null인지 확인

        const { clientX, clientY } = e; // 마우스 위치
        const { height, width, left, top } =
            ref.current.getBoundingClientRect(); // 버튼 위치 및 크기
        const middleX = clientX - (left + width / 2); // 마우스와 버튼 중심의 X 거리
        const middleY = clientY - (top + height / 2); // 마우스와 버튼 중심의 Y 거리
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 }); // 버튼 초기 위치로 복귀
    };

    const { x, y } = position;

    return (
        <motion.div
            style={{ position: "relative" }} // 버튼의 상대 위치 설정
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }} // 애니메이션 위치 설정
            transition={{
                type: "spring",
                stiffness: 150, // 스프링 강도
                damping: 15, // 감쇠 비율
                mass: 0.1, // 질량
            }}
        >
            {children}
        </motion.div>
    );
}
