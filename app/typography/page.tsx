import Link from "next/link";
import Word from "../../components/Word";
import Styles from "../page.module.scss";

// const paragraph =
//     "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
const paragraph =
    "YK 기획은/ 고객사의 비즈니스 목표, 타겟 고객,/ 브랜드 포지셔닝 등을/ 명확히 이해하고 마케팅 전략을 제안합니다./ 디지털 마케팅의 모든 분야에서/ 원스톱 솔루션을 제공하여/ 고객의 비즈니스 성장에/ 실질적인 가치를 더해드립니다.";

export default function Home() {
    return (
        <main className={Styles.linkContainer}>
            <Link href="./" className={Styles.back_button}>
                뒤로가기
            </Link>
            <div style={{ height: "50vh" }}></div>
            <Word value={paragraph} />
            <div style={{ height: "150vh" }}></div>
        </main>
    );
}
