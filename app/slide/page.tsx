"use client";

import React, { useEffect } from "react";
import $ from "jquery";
import "turn.js";
import Link from "next/link";
import Styles from "../../app/page.module.scss";

const options = {
    width: 800,
    height: 600,
    autoCenter: true,
    display: "single",
    acceleration: true,
    elevation: 50,
    gradients: !$.isTouch,
    duration: 1500,
};

const pages = [
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
    "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg",
];

let initialX: number | null = null;
let initialY: number | null = null;

function initTouch(e: TouchEvent | MouseEvent) {
    initialX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
    initialY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
}

export default function PageSlide() {
    useEffect(() => {
        const bookElement = $("#book");

        // `turn.js` 초기화
        if (bookElement.length > 0) {
            bookElement.turn(options);
        }

        // 스크롤 이벤트 추가
        const handleScroll = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                bookElement.turn("next");
            } else {
                bookElement.turn("previous");
            }
        };

        // 마우스 및 터치 이벤트 설정
        const handleMouseDown = (e: MouseEvent) => {
            if (e.button === 0) {
                initTouch(e);
                const handleMouseMove = (moveEvent: MouseEvent) => swipeDirection(moveEvent, bookElement);

                const handleMouseUp = () => {
                    window.removeEventListener("mousemove", handleMouseMove);
                    window.removeEventListener("mouseup", handleMouseUp);
                };

                window.addEventListener("mousemove", handleMouseMove);
                window.addEventListener("mouseup", handleMouseUp);
            }
        };

        // 스와이프 화면넘김
        function swipeDirection(e: TouchEvent | MouseEvent) {
            if (initialX !== null && initialY !== null) {
                const currentX = e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
                const currentY = e instanceof TouchEvent ? e.touches[0].clientY : e.clientY;
            
                const diffX = initialX - currentX;
                const diffY = initialY - currentY;
            
                if (Math.abs(diffX) > Math.abs(diffY)) {
                    if (diffX > 0) {
                        bookElement.turn("next");
                    } else {
                        bookElement.turn("previous");
                    }
                }
            
                initialX = null;
                initialY = null;
            }
        }

        const handleTouchStart = (e: TouchEvent) => initTouch(e);
        const handleTouchMove = (e: TouchEvent) => swipeDirection(e);

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);

    }, []);

    return (
        <main className={Styles.linkContainer}>
            <Link href="./" className={Styles.back_button}>
                뒤로가기
            </Link>
            <div id="book" style={{ width: "800px", height: "600px", margin: "0 auto", top: "100px"}}>
                {pages.map((page, index) => (
                    <div key={index} style={{ width: "100%", height: "100%" }}>
                        <img
                            src={page}
                            alt={`Page ${index + 1}`}
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
