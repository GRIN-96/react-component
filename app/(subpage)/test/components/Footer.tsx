import MagneticButton from "@/app/(subpage)/scrollPage/components/Magnetic_button";

export default function Footer({ ref }) {
    return (
        <>
            <section ref={ref}
                style={{
                    // backgroundColor: "gray"
                }}
            >
                <MagneticButton 
                    width={220}
                >
                    tmp
                </MagneticButton>

                <MagneticButton 
                    width={220}
                >
                    tmp
                </MagneticButton>

                <MagneticButton
                    width={220}
                    height={60}
                    onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                >
                    Top
                </MagneticButton>
            </section>
        </>
    );
}
