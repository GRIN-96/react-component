"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Paragraph from "@/app/(subpage)/scrollPage/components/Paragraph";
import Main from "@/app/(subpage)/scrollPage/components/Main";
import Footer from "@/app/(subpage)/scrollPage/components/Footer";
import Images from "@/app/(subpage)/scrollPage/components/Image";
import MenuBar from "@/app/(subpage)/scrollPage/components/MenuBar";

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

// 애니메이션 Variants
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

export default function ScrollPage() {
    // const ref = useRef(null);

    const mainRef = useRef<HTMLDivElement | null>(null);
    const introduceRef = useRef<HTMLDivElement | null>(null);
    const serviceRef = useRef<HTMLDivElement | null>(null);
    const footerRef = useRef<HTMLDivElement | null>(null);

    const [activeSection, setActiveSection] = useState<string>("");

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { name: "mainRef", ref: mainRef },
                { name: "introduceRef", ref: introduceRef },
                { name: "serviceRef", ref: serviceRef },
                { name: "footerRef", ref: footerRef },
            ];

            const currentSection = sections.find(
                (section) =>
                    section.ref.current &&
                    section.ref.current.offsetTop <= window.scrollY + 200 &&
                    section.ref.current.offsetTop +
                        section.ref.current.offsetHeight >
                        window.scrollY + 200
            );

            if (currentSection) {
                setActiveSection(currentSection.name);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div>
                <Main ref={mainRef} /> {/* Main */}
                <Paragraph value={paragraph} ref={introduceRef} />{" "}
                {/* Typography */}
                <div
                    ref={serviceRef}
                >
                    {data.map((img) => (
                        <Images key={img.id} text={img.text} url={img.url}/>
                    ))}
                </div>
                <Footer ref={footerRef} />
                <MenuBar
                    activeSection={activeSection}
                    onNavigate={(section) => {
                        if (section === "mainRef") scrollToSection(mainRef);
                        else if (section === "introduceRef")
                            scrollToSection(introduceRef);
                        else if (section === "serviceRef")
                            scrollToSection(serviceRef);
                        else if (section === "footerRef")
                            scrollToSection(footerRef);
                    }}
                />
            </div>
        </>
    );
}
