"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import { GrInfo } from "react-icons/gr";
import Styles from "@/app/page.module.scss";

const icons = [
    {
        shape: <FiHome />,
        menu: "mainRef",
    },
    {
        shape: <FaBookOpen />,
        menu: "introduceRef",
    },
    {
        shape: <AiFillStar />,
        menu: "serviceRef",
    },
    {
        shape: <GrInfo />,
        menu: "footerRef",
    },
];

interface MenuBarProps {
    onNavigate: (section: string) => void;
    activeSection : string;
}

// index 찾기
const findMenuIndex = (menuName) => {
    return icons.findIndex((icon) => icon.menu === menuName);
};

const MenuBar = ({ onNavigate, activeSection }: MenuBarProps) => {
    const icon = icons.map((x) => {
        return x.shape;
    });

    const [selectedMenu, setSelectedMenu] = useState(icon[0]);

    // scroll ref 값에 따른 메뉴 활성화값 변경
    useEffect(() => {
        setSelectedMenu(icon[findMenuIndex(activeSection)]);
    }, [activeSection]);

    // const handleMouseOut = () => {
    //     setSelectedMenu(selectedMenu); // 현재 메뉴로 이동되도록 수정
    // };

    return (
        <div className={Styles.menu_bar}>
            <motion.div className={Styles.menu_list}
                initial={{opacity: activeSection === 'footerRef' ? 1 : 0}}
                animate={{opacity: activeSection === 'footerRef' ? 0 : 1}}
            >
                <div className={Styles.menu_item}>
                    <ul>
                        {icons.map((item, i) => (
                            <li
                                key={`${item.shape}-${i}`}
                                onMouseOver={() => setSelectedMenu(item.shape)}
                                onMouseLeave={() => setSelectedMenu(icon[findMenuIndex(activeSection)])}
                                onClick={() => onNavigate(item.menu)}
                            >
                                {item.shape == selectedMenu ? (
                                    <motion.div
                                        layoutId="spotlight"
                                        className={Styles.wrap_spotlight}
                                    >
                                        <div className={Styles.circle} />
                                        <div className={Styles.spotlight} />
                                    </motion.div>
                                ) : null}
                                <span>{item.shape}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

export default MenuBar;
