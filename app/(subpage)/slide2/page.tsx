"use client";

import Link from "next/link";
import Styles from "../../page.module.scss";
import ScrollWrapper from "./ScrollWrapper";
import styled from "styled-components";

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

export default function ScrollAnimation() {
    return (
        <main className={Styles.linkContainer}>
            <div style={{ height: "150vh" }}></div>
            <div style={{ height: "150vh" }}></div>
            <Wrapper>
                <ScrollWrapper>
                    <Poster src="https://img.imbc.com/adams/Program/20237/133336262124493935.jpg" />
                </ScrollWrapper>
                <OverviewWrapper>
                    {pages.map((overview) => (
                        <ScrollWrapper key={overview}>
                            <Overview>{overview}</Overview>
                        </ScrollWrapper>
                    ))}
                </OverviewWrapper>
            </Wrapper>
        </main>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    padding: 150px 20px 100px;
`;

const Poster = styled.img`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    object-fit: cover;
    margin-bottom: 10px;
`;

const OverviewWrapper = styled.div``;

const Overview = styled.p`
    margin-bottom: 5px;
    font-family: "Shilla_CultureB-Bold";
    font-size: 1.5rem;
    color: #575755;
    line-height: 1.8;
    white-space: pre;

    @media screen and (max-width: 1024px) {
        font-size: 1rem;
    }
`;
