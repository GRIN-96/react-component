import MagneticButton from "@/app/(subpage)/scrollPage/components/Magnetic_button";


export default function Footer({ref}) {

    return (
        <>
            <section ref={ref}>
                <MagneticButton>
                    <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors px-10 text-lg text-white py-4 rounded-full">
                        Magnetic Button
                    </button>
                </MagneticButton>
            </section>
        </>
    )
}