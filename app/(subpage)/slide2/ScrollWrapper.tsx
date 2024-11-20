import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import useScrollAnimation from "../../../hooks/useScrollAnimation";

interface ScrollWrapperProps {
    children: ReactNode;
}

const fadeInVariants: Variants = {
    hidden: {
        opacity: 0,
        translateY: 0,
    },
    visible: {
        opacity: 1,
        translateY: -20,
        transition: {
            duration: 1,
        },
    },
};

const ScrollWrapper = ({ children }: ScrollWrapperProps) => {
    const { ref, animation } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            variants={fadeInVariants}
            initial="hidden"
            animate={animation}
        >
            {children}
        </motion.div>
    );
};

export default ScrollWrapper;
