import Styles from "@/app/page.module.scss";
import { motion } from "framer-motion";

const companyName = "YK 기획";
const introducion = "Data-Driven Marketing\nProven by Result";
const services = "디지털 광고/SEO/Web 개발/디자인/영상";
const img_src = "https://static.wanted.co.kr/images/wdes/0_5.d77b85f2.png";

export default function Main({ ...props }) {
    return (
        <section className={Styles.mainSection} {...props}>
            <motion.h1
                className={Styles.title}
                initial={{ y: "-1000", opacity: 0 }}
                animate={{ opacity: 1, fontSize: "2rem" }}
            >
                {companyName}
            </motion.h1>
            <motion.div
                className={Styles.introducion}
                initial={{ y: "-1000", opacity: 0 }}
                animate={{ opacity: 1, fontSize: "3rem" }}
            >
                <p>{introducion}</p>
                <p className={Styles.services}>{services}</p>
            </motion.div>
            <motion.div
                className={Styles.wrapImage}
                initial={{ y: "-1000", opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <img src={img_src} />
            </motion.div>
        </section>
    );
}
