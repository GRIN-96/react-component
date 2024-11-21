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
    // {
    //     id: 5,
    //     text: "page1",
    //     url: "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    // },
    // {
    //     id: 6,
    //     text: "page2",
    //     url: "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    // },
    // {
    //     id: 7,
    //     text: "page3",
    //     url: "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    // },
    // {
    //     id: 8,
    //     text: "page4",
    //     url: "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    // },
    // {
    //     id: 9,
    //     text: "page5",
    //     url: "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    // },
    // {
    //     id: 10,
    //     text: "page6",
    //     url: "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
    // },
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

    const [activeSection, setActiveSection] = useState<string>(""); // 현재 활성화된 섹션

    // GNB 스크롤 이동 이벤트
    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) {
            window.scrollTo({
                top: sectionRef.current.offsetTop,
                behavior: "smooth",
            });
        }
    };

    // 스크롤 이벤트 핸들러
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                { name: "mainRef", ref: mainRef },
                { name: "introduceRef", ref: introduceRef },
                { name: "serviceRef", ref: serviceRef },
                { name: "footerRef", ref: footerRef },
            ];

            // 현재 스크롤 위치 확인
            const currentSection = sections.find(
                (section) =>
                    section.ref.current &&
                    section.ref.current.offsetTop <= window.scrollY + 200 && // 오프셋 추가
                    section.ref.current.offsetTop + section.ref.current.offsetHeight >
                        window.scrollY + 200
            );

            if (currentSection) {
                setActiveSection(currentSection.name); // 활성화된 섹션 업데이트
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div>
                <Main ref={mainRef}/>  {/* Main */}
                <Paragraph 
                    value={paragraph} 
                    ref={introduceRef}
                />  {/* Typography */}
                {data.map((img) => (
                    <Images 
                        key={img.id} 
                        text={img.text} 
                        url={img.url}
                    />
                ))}
                <Footer ref={footerRef}/>
                <MenuBar 
                    activeSection={activeSection}
                    onNavigate={(section) => {
                        if (section === "mainRef") scrollToSection(mainRef);
                        else if (section === "introduceRef") scrollToSection(introduceRef);
                        else if (section === "serviceRef") scrollToSection(serviceRef);
                        else if (section === "footerRef") scrollToSection(footerRef);
                    }}
                />
            </div>
        </>
    );
}
