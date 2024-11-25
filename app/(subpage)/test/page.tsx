"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbInputSearch, TbPencilStar } from "react-icons/tb";
import { FaSafari } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";

const menuItems = [
    { id: 1, label: <RiAdvertisementLine />, content: "/img/1.png" },
    { id: 2, label: <TbInputSearch />, content: "/img/2.png" },
    { id: 3, label: <FaSafari />, content: "/img/3.png" },
    { id: 4, label: <TbPencilStar />, content: "/img/4.png" },
    { id: 5, label: <MdOutlineOndemandVideo />, content: "/img/5.png" },
];

function AnimatedMenu() {
    const [selectedMenu, setSelectedMenu] = useState(1); // 현재 선택된 메뉴 ID
    const [visibleSections, setVisibleSections] = useState<number[]>([]); // 보이는 섹션 ID 목록
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // 섹션 참조 배열

    // Intersection Observer로 섹션 및 이미지 감지
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const sectionId = parseInt(
                        entry.target.getAttribute("data-id") || "1",
                        10
                    );
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => [
                            ...new Set([...prev, sectionId]),
                        ]);
                        setSelectedMenu(sectionId);
                    } else {
                        setVisibleSections((prev) =>
                            prev.filter((id) => id !== sectionId)
                        );
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const handleMenuClick = (id: number) => {
        setSelectedMenu(id);
        sectionRefs.current[id - 1]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    return (
        <div
            style={{
                height: "100vh",
                overflowY: "scroll",
                backgroundColor: "#0d0d0d",
                color: "#fff",
            }}
        >
            {/* 좌측 메뉴 */}
            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "1rem",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                {menuItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => handleMenuClick(item.id)}
                        initial={{ opacity: 0.6 }}
                        animate={{
                            opacity: selectedMenu === item.id ? 1 : 0.5,
                            color:
                                selectedMenu === item.id ? "#00e61b" : "#fff",
                        }}
                        whileHover={{
                            opacity: 1,
                            color: "#00e61b",
                        }}
                        style={{
                            marginBottom: "1rem",
                            cursor: "pointer",
                            fontSize: "1.8rem",
                        }}
                    >
                        {item.label}
                    </motion.div>
                ))}
            </div>

            {/* 스크롤 섹션 */}
            <div>
                {menuItems.map((item, index) => (
                    <div
                        key={item.id}
                        ref={(el) => {
                            sectionRefs.current[index] = el;
                        }}
                        data-id={item.id}
                        style={{
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: index % 2 === 0 ? "#111" : "#222",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={
                                visibleSections.includes(item.id)
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 50 }
                            }
                            transition={{ duration: 0.5 }}
                            style={{
                                fontSize: "2rem",
                                textAlign: "center",
                                color: "#00e61b",
                            }}
                        >
                            <img
                                src={item.content}
                                alt={`Content ${item.id}`}
                                style={{
                                    width: "80%",
                                    height: "auto",
                                    maxHeight: "400px",
                                }}
                            />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const TestComp = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        const len = sectionList.length;
        const current = Math.floor(val / (1 / len));
        if (currentSection !== current) {
            setCurrentSection(current);
        }
    });
    const sectionList = [
        { index: 0, component: <div>1</div> },
        { index: 1, component: <div>2</div> },
        { index: 2, component: <div>3</div> },
        { index: 3, component: <div>4</div> },
        { index: 4, component: <div>5</div> },
    ];
    return (
        <div>
            <div style={{ position: "fixed", top: "0" }}>
                {currentSection === 0 && <div>1</div>}
                {currentSection === 1 && <div>2</div>}
                {currentSection === 2 && <div>3</div>}
                {currentSection === 3 && <div>4</div>}
                {currentSection === 4 && <div>5</div>}
            </div>
            <div ref={ref}>
                {sectionList.map((_, index) => (
                    <div
                        key={index}
                        style={{ width: "100vw", height: "100vh" }}
                    />
                ))}
            </div>
        </div>
    );
};
export default TestComp;
