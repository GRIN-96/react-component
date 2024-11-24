"use client";

import Footer from "@/app/(subpage)/scrollPage/components/Footer";
import Images from "@/app/(subpage)/scrollPage/components/Image";
import Main from "@/app/(subpage)/scrollPage/components/Main";
import MenuBar from "@/app/(subpage)/scrollPage/components/MenuBar";
import Paragraph from "@/app/(subpage)/scrollPage/components/Paragraph";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import ModeSwitch from "./components/ModeSwitch";
import Styles from "@/app/page.module.scss";

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

export default function ScrollPage() {
    const serviceRef = useRef<HTMLDivElement>(null);
    const serviceContentRef = useRef<Array<HTMLDivElement>>([]);

    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    const observedTarget = entry.target as HTMLElement;
                    setActiveSection(observedTarget.dataset.name as string);
                }
            });
        };
        const observer = new IntersectionObserver(handleObserver, {
            threshold: [0.3, 0.7],
        });
        const targetSections = document.querySelectorAll("section");
        if (targetSections.length > 0) {
            targetSections.forEach((target) => {
                observer.observe(target);
            });
        }
        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        // Gsap :: Horizontal Scroll 적용
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(serviceContentRef.current, {
            xPercent: 0,
        });
        gsap.to(serviceContentRef.current, {
            xPercent: (serviceContentRef.current.length - 1) * -100,
            ease: "none",
            scrollTrigger: {
                trigger: serviceRef.current,
                scrub: true,
                pin: true,
                start: "top top",
                end: () => {
                    if (serviceRef.current) {
                        return `+=${
                            serviceRef.current.scrollWidth - window.innerWidth
                        }`;
                    }
                    return 0;
                },
                snap: {},
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <>
            <div>
                <Main id="main" data-name="main" />
                <Paragraph
                    id="introduce"
                    value={paragraph}
                    data-name="introduce"
                />{" "}
                {/* Typography */}
                <section
                    id="service"
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "center",
                        justifyContent: "start",
                        overflow: "hidden",
                    }}
                    data-name="service"
                    ref={serviceRef}
                >
                    {/* serviceContentRef */}
                    {data.map((img, index) => (
                        <Images
                            key={img.id}
                            text={img.text}
                            url={img.url}
                            ref={(ref) =>
                                (serviceContentRef.current[index] = ref)
                            }
                            style={{ paddingLeft: "2.5rem" }}
                        />
                    ))}
                </section>
                <Footer id="footer" data-name="footer" />
                <MenuBar
                    activeSection={activeSection}
                    onNavigate={(section) => {
                        setActiveSection(section);
                    }}
                />
                <ModeSwitch />
                <a
                    className={Styles.scroll_icon}
                    style={
                        activeSection === "footer"
                            ? { display: "none" }
                            : { display: "block" }
                    }
                    href="#"
                ></a>
            </div>
        </>
    );
}
