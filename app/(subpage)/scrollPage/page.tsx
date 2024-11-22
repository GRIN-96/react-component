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
        text: "Canyon",
        url: "https://images.pexels.com/photos/19561297/pexels-photo-19561297.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        id: 2,
        text: "Kyoto",
        url: "https://images.pexels.com/photos/19488566/pexels-photo-19488566/free-photo-of-kyoto.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        id: 3,
        text: "Forest",
        url: "https://images.pexels.com/photos/19237996/pexels-photo-19237996/free-photo-of-empty-road-in-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
        id: 4,
        text: "Vietnam",
        url: "https://images.pexels.com/photos/18707547/pexels-photo-18707547/free-photo-of-a-curved-road-in-the-mountains-with-a-motorcycle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
];

const paragraph =
    "YK 기획은/ 고객사의 비즈니스 목표, 타겟 고객,/ 브랜드 포지셔닝 등을/ 명확히 이해하고 마케팅 전략을 제안합니다./ 디지털 마케팅의 모든 분야에서/ 원스톱 솔루션을 제공하여/ 고객의 비즈니스 성장에/ 실질적인 가치를 더해드립니다.";

export default function ScrollPage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);

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
                <section
                    ref={serviceRef}
                    style={{
                        display: "flex",
                        overflowX: "hidden", // 가로 스크롤 활성화
                        scrollSnapType: "x mandatory", // 스냅 스크롤 적용
                        gap: "16px",
                        padding: "16px",
                    }}
                >
                    {data.map((img) => (
                        <Images key={img.id} text={img.text} url={img.url}/>
                    ))}
                </section>
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
