"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import Styles from "@/app/page.module.scss";
import Link from "next/link";

type MenuType = "main" | "introduce" | "service" | "footer";

// const icons = [
//     {
//         shape: <FiHome />,
//         menu: "main",
//     },
//     {
//         shape: <FaBookOpen />,
//         menu: "introduce",
//     },
//     {
//         shape: <AiFillStar />,
//         menu: "service",
//     },
//     {
//         shape: <GrInfo />,
//         menu: "footer",
//     },
// ];

const menuData = {
    main: {
        icon: <FiHome />,
        name: "",
    },
    introduce: {
        icon: <FaBookOpen />,
        name: "",
    },
    service: {
        icon: <AiFillStar />,
        name: "",
    },
    footer: {
        icon: <GrInfo />,
        name: "",
    },
};

interface MenuBarProps {
    onNavigate?: (section: string) => void;
    activeSection: string;
}

// index 찾기
// const findMenuIndex = (menuName) => {
//     return icons.findIndex((icon) => icon.menu === menuName);
// };

const MenuBar = ({ onNavigate, activeSection }: MenuBarProps) => {
    // const icon = icons.map((x) => {
    //     return x.shape;
    // });

    const [selectedMenu, setSelectedMenu] = useState<MenuType | undefined>(
        undefined
    );
    const [hoveredMenu, setHoveredMenu] = useState<MenuType | undefined>(
        undefined
    );

    // scroll ref 값에 따른 메뉴 활성화값 변경
    useEffect(() => {
        setSelectedMenu(activeSection as MenuType);
        console.log(activeSection);
    }, [activeSection]);

    // const handleMouseOut = () => {
    //     setSelectedMenu(selectedMenu); // 현재 메뉴로 이동되도록 수정
    // };

    return (
        <div className={Styles.menu_bar}>
            <motion.div
                className={Styles.menu_list}
                initial={
                    activeSection === "footer"
                        ? { opacity: 0, display: "none" }
                        : { opacity: 1, display: "block" }
                }
                animate={
                    activeSection === "footer"
                        ? { opacity: 0, display: "none" }
                        : { opacity: 1, display: "block" }
                }
            >
                <div className={Styles.menu_item}>
                    <ul>
                        {Object.entries(menuData).map(([name, value], i) => (
                            <SmoothLink
                                key={`${name}-${i}`}
                                id={name}
                                // scroll={false}
                            >
                                <li
                                    onMouseOver={() =>
                                        setHoveredMenu(name as MenuType)
                                    }
                                    onMouseLeave={
                                        () =>
                                            setHoveredMenu(
                                                selectedMenu as MenuType
                                            )
                                        // icon[findMenuIndex(activeSection)]
                                    }
                                    onClick={() =>
                                        setSelectedMenu(name as MenuType)
                                    }
                                >
                                    {name === hoveredMenu ||
                                    name === selectedMenu ? (
                                        <motion.div
                                            layoutId="spotlight"
                                            className={Styles.wrap_spotlight}
                                        >
                                            <div className={Styles.circle} />
                                            <div className={Styles.spotlight} />
                                        </motion.div>
                                    ) : null}
                                    <span>{value.icon}</span>
                                </li>
                            </SmoothLink>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default MenuBar;

const SmoothLink = ({ id, children, ...props }) => {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <Link href={`#${id}`} {...props} onClick={handleClick} passHref>
            {children}
        </Link>
    );
};
