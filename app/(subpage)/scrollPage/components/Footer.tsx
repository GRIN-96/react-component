import MagneticButton from "@/app/(subpage)/scrollPage/components/Magnetic_button";

export default function Footer({ ...props }) {
    return (
        <>
            <section
                style={{
                    // backgroundColor: "gray"
                    position: "relative",
                    gap: "2rem",
                }}
                {...props}
            >
                <MagneticButton width={220}>tmp</MagneticButton>

                <MagneticButton width={220}>tmp</MagneticButton>

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
