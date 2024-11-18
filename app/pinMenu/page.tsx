"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Styles from "../page.module.scss";
import { FiHome, FiMapPin, FiFolder, FiLock } from 'react-icons/fi';

const icons = [
    {
      shape: <FiHome />,
    },
    {
      shape: <FiMapPin />,
    },
    {
      shape: <FiFolder />,
    },
    {
      shape: <FiLock />,
    },
]

const MenuBar = ({obj}) => {
    const icon = icons.map((x) => {
        return x.shape;
    })

    const page = obj === undefined || obj === null ? icon[0] : "";

    const [selectedMenu, setSelectedMenu] = useState(page);

    useEffect(() => {
        setSelectedMenu(page);
    }, []);

    const handleMouseOut = () => {
        setSelectedMenu(selectedMenu); // 현재 메뉴로 이동되도록 수정
    }


    return (
        <main className={Styles.linkContainer}>
             <Link href="./" className={Styles.link}>
                 뒤로가기
             </Link>
        
            <motion.div className={Styles.menu_list}>
                <div className={Styles.menu_item}>
                    <ul>
                        {icons.map((item, i) => {
                            return (
                            <li key={`${item.shape}-${i}`} onMouseOver={() => setSelectedMenu(item.shape)} 
                            >
                                {item.shape}
                                {item.shape == selectedMenu ? (
                                <motion.div layoutId="underline" className={Styles.underline}></motion.div>
                                ) : null}
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </motion.div>
        </main>
    );
}

export default MenuBar;