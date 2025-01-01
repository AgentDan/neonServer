import React from 'react';
import {ScrollControls} from "@react-three/drei";
import Overlay from "./Overlay.jsx";
import Bubble from "./Bubble.jsx";

const Experience = () => {
    return (
        <>
            <ScrollControls pages={10} damping={0.2}>
                <Overlay/>
                <Bubble/>
            </ScrollControls>

        </>
    );
};

export default Experience;