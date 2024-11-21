import MagneticButton from "@/app/(subpage)/scrollPage/components/Magnetic_button";

export default function Footer({ ref }) {
    return (
        <>
            <section ref={ref}>
                <MagneticButton>tmp</MagneticButton>

                <MagneticButton>tmp</MagneticButton>

                <MagneticButton
                    width={200}
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
