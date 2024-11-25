"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbInputSearch } from "react-icons/tb";

const menuItems = [
    { id: 1, label: <RiAdvertisementLine/>, content: "Transforms Content" },
    { id: 2, label: <TbInputSearch/>, content: "Springs Content" },
    { id: 3, label: "Scroll", content: "Scroll Content" },
    { id: 4, label: "Exit animations", content: "Exit Animations Content" },
    { id: 5, label: "Layout animations", content: "Layout Animations Content" },
    { id: 6, label: "Gestures", content: "Gestures Content" },
    { id: 7, label: "Timeline", content: "Timeline Content" },
];

export default function AnimatedMenu() {
    const [selectedMenu, setSelectedMenu] = useState(1); // 현재 선택된 메뉴 ID

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#0d0d0d",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* 좌측 메뉴 */}
            <div style={{ flex: 1, paddingLeft: "50px" }}>
                {menuItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => setSelectedMenu(item.id)}
                        initial={{ opacity: 0.6 }}
                        animate={{
                            opacity: selectedMenu === item.id ? 1 : 0.6,
                            x: selectedMenu === item.id ? 10 : 0,
                        }}
                        whileHover={{
                            opacity: 1,
                            x: 15,
                            color: "#00e61b",
                        }}
                        style={{
                            marginBottom: "0.3rem",
                            cursor: "pointer",
                            fontSize: "1.8rem",
                            position: "relative",
                        }}
                    >
                        {item.label}
                        {selectedMenu === item.id && (
                            <motion.div
                                layoutId="underline"
                                style={{
                                    height: "30px",
                                    width: "4px",
                                    backgroundColor: "#00e61b",
                                    position: "absolute",
                                    bottom: "0px",
                                    left: "-10px",
                                }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* 우측 콘텐츠 */}
            <div style={{ flex: 3, padding: "50px" }}>
                <AnimatePresence mode="wait">
                    {menuItems
                        .filter((item) => item.id === selectedMenu)
                        .map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    fontSize: "2rem",
                                    textAlign: "center",
                                    color: "#e6007a",
                                }}
                            >
                                {item.content}
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
