"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Styles from "../../app/page.module.scss";
import HTMLFlipBook from "react-pageflip";

// const pages = [
//     "/img/1.png",
//     "/img/2.png",
//     "/img/3.png",
//     "/img/4.png",
//     "/img/5.png",
// ];

const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
];

type SizeType = "fixed" | "stretch";

const options = {
    startPage: 0,
    size: "fixed" as SizeType,
    minWidth: 0,
    maxWidth: 0,
    minHeight: 0,
    maxHeight: 0,
    drawShadow: true,
    flippingTime: 500,
    usePortrait: true,
    startZIndex: 0,
    autoSize: true,
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: false,
    clickEventForward: true,
    useMouseEvents: true,
    swipeDistance: 100,
    showPageCorners: false,
    disableFlipByClick: false,
};

export default function PageSlide() {
    return (
        <main
            className={Styles.linkContainer}
        >
            <Link href="./" className={Styles.back_button}>
                뒤로가기
            </Link>

            <HTMLFlipBook
                width={1000}
                height={500}
                className={""}
                style={{margin: "auto auto",  top: '60px'}}
                {...options}
            >
                {pages.map((page, index) => (
                    <div
                        key={index}
                        className={`page page-${index + 1}`} // 고유 클래스 추가
                        style={{ width: "100%", height: "100%" }}
                    >
                        <img
                            src={page}
                            alt={`Page ${index + 1}`}
                            style={{ width: "100%", height: "100%"}}
                        />
                    </div>
                ))}
            </HTMLFlipBook>
        </main>
    );
}
