import useScrollAnimation from "@/hooks/useScrollAnimation";
import { motion, Variants } from "framer-motion";

const fadeInVariants: Variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 0, // 올바르게 설정
        transition: {
            duration: 1, // 적절한 지속 시간
        },
    },
};

export default function Images({ text, url }) {
    const { ref, animation } = useScrollAnimation();

    return (
        <section>
            <div>
                <motion.img 
                    src={url} 
                    alt={text} 
                    ref={ref}
                    initial="hidden"
                    animate={animation}
                    variants={fadeInVariants}
                />
            </div>
            <h2>{text}</h2>
        </section>
    );
}
