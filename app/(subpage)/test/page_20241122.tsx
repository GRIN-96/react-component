"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Paragraph from "@/app/(subpage)/scrollPage/components/Paragraph";
import Main from "@/app/(subpage)/scrollPage/components/Main";
import Footer from "@/app/(subpage)/scrollPage/components/Footer";
import Images from "@/app/(subpage)/scrollPage/components/Image";
import MenuBar from "@/app/(subpage)/scrollPage/components/MenuBar";

// 이미지 데이터
const data = [
    {
        id: 1,
        text: "디지털 광고",
        url: "/img/1.png",
    },
    {
        id: 2,
        text: "SEO",
        url: "/img/2.png",
    },
    {
        id: 3,
        text: "Web 개발",
        url: "/img/3.png",
    },
    {
        id: 4,
        text: "디자인",
        url: "/img/4.png",
    },
    {
        id: 5,
        text: "영상",
        url: "/img/5.png",
    },
];

const paragraph =
    "YK 기획은/ 고객사의 비즈니스 목표, 타겟 고객,/ 브랜드 포지셔닝 등을/ 명확히 이해하고 마케팅 전략을 제안합니다./ 디지털 마케팅의 모든 분야에서/ 원스톱 솔루션을 제공하여/ 고객의 비즈니스 성장에/ 실질적인 가치를 더해드립니다.";

// 애니메이션 Variants 정의
const sectionVariants = {
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

export default function ScrollSnapWithComponents() {
    const mainRef = useRef<HTMLDivElement | null>(null);
    const introduceRef = useRef<HTMLDivElement | null>(null);
    const serviceRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    const [activeSection, setActiveSection] = useState(0);

    // 각 섹션을 정의
    const sections = [
        { id: 1, name: "mainRef", content: <Main ref={mainRef} /> },
        {
            id: 2,
            name: "introduceRef",
            content: <Paragraph value={paragraph} ref={introduceRef} />,
        },
        {
            id: 3,
            name: "serviceRef",
            content: (
                <div ref={serviceRef}>
                    {data.map((img) => (
                        <Images key={img.id} text={img.text} url={img.url} />
                    ))}
                </div>
            ),
        },
        { id: 4, name: "footerRef", content: <Footer ref={footerRef} /> },
    ];

    // 스크롤 이벤트로 섹션 전환
    const handleWheel = (event: React.WheelEvent) => {
        if (event.deltaY > 0) {
            // 스크롤 다운: 다음 섹션으로 이동
            setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
        } else if (event.deltaY < 0) {
            // 스크롤 업: 이전 섹션으로 이동
            setActiveSection((prev) => Math.max(prev - 1, 0));
        }
    };

    // 메뉴바에서 특정 섹션으로 스크롤 이동
    const scrollToSection = (sectionName: string) => {
        const targetIndex = sections.findIndex((s) => s.name === sectionName);
        if (targetIndex !== -1) {
            setActiveSection(targetIndex);
        }
    };

    return (
        <div
            onWheel={handleWheel}
            style={{
                height: "100vh",
                overflow: "hidden", // 기본 스크롤 제거
                position: "relative",
            }}
        >
            {/* 애니메이션 섹션 */}
            <AnimatePresence>
                {sections.map(
                    (section, index) =>
                        index === activeSection && (
                            <motion.div
                                key={section.id}
                                style={{
                                    height: "100vh",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    position: "absolute",
                                    width: "100%",
                                }}
                                variants={sectionVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                {section.content}
                            </motion.div>
                        )
                )}
            </AnimatePresence>

            {/* 메뉴 바 */}
            <MenuBar
                activeSection={sections[activeSection]?.name || ""}
                onNavigate={scrollToSection}
            />
        </div>
    );
}
