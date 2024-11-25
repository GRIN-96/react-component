"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiAdvertisementLine } from "react-icons/ri";
import { TbInputSearch, TbPencilStar } from "react-icons/tb";
import { FaSafari } from "react-icons/fa6";
import { MdOutlineOndemandVideo } from "react-icons/md";
import Styles from "@/app/page.module.scss";

const menuItems = [
    { id: 1, label: <RiAdvertisementLine />, content: "/img/1.png" },
    { id: 2, label: <TbInputSearch />, content: "/img/2.png" },
    { id: 3, label: <FaSafari />, content: "/img/3.png" },
    { id: 4, label: <TbPencilStar />, content: "/img/4.png" },
    {
        id: 5,
        label: <MdOutlineOndemandVideo />,
        content: "/img/5.png",
    },
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
            <div style={{ paddingLeft: "4rem" }}>
                {menuItems.map((item) => (
                    <motion.div
                        key={item.id}
                        onClick={() => setSelectedMenu(item.id)}
                        initial={{ opacity: 0.6 }}
                        animate={{
                            opacity: selectedMenu === item.id ? 1 : 0.5,
                            color:
                                selectedMenu === item.id ? "#00e61b" : "#fff",
                            x: selectedMenu === item.id ? 15 : 0,
                        }}
                        whileHover={{
                            opacity: 1,
                            x: 15,
                            color: "#00e61b",
                        }}
                        style={{
                            marginBottom: "1rem",
                            cursor: "pointer",
                            fontSize: "1.8rem",
                            position: "relative",
                        }}
                    >
                        {item.label}
                        {selectedMenu === item.id && (
                            <motion.div
                                layoutId="underline"
                                className={Styles.wrap_selectedMenu}
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
            <div style={{ padding: "6rem" }}>
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
                                    color: "#00e61b",
                                }}
                            >
                                <img src={item.content} />
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
