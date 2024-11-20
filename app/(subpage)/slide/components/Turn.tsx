import React, { useRef, useEffect } from "react";

const Turn = (props) => {
    const fadeClass = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (fadeClass) {
            $(fadeClass).turn(Object.assign({}, props.options));
        }
        // 	//   document.addEventListener("keydown", handleKeyDown, false);
    }, [props.options]);

    return (
        <div
            className={props.className}
            style={Object.assign({}, props.style)}
            ref={(el) => {
                fadeClass.current = el;
            }}
        >
            {props.children}
        </div>
    );
};

export default Turn;
