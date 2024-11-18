"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Styles from "../page.module.scss";

const Scroll = ({obj}) => {

    return (
        <main className={Styles.linkContainer}>
             <Link href="./" className={Styles.link}>
                 뒤로가기
             </Link>
        
            <div className={Styles.menu_list}>
                <a className={Styles.scroll} href="#">Read more</a>
            </div>
        </main>
    )
}

export default Scroll;