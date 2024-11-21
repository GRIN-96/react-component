import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Images({ text, url }: { text: string; url: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

    return (
        <div
            style={{
                flexShrink: 0,
                width: "300px", // 고정된 이미지 크기
                height: "200px",
                scrollSnapAlign: "start", // 스크롤 스냅 효과
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f3f4f6", // 배경색 추가
                borderRadius: "8px", // 둥근 모서리
                overflow: "hidden", // 넘침 내용 숨기기
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 그림자 추가
            }}
        >
            <div ref={ref} style={{ width: "100%", height: "100%" }}>
                <img
                    src={url}
                    alt={text}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // 이미지 비율 유지
                    }}
                />
            </div>
            <motion.h2
                style={{
                    marginTop: "8px",
                    y,
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                {text}
            </motion.h2>
        </div>
    );
}
