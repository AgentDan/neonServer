import './App.css'
import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience.jsx";
import React from "react";

function App() {

    return (
        <>
            <div className="bg-black">
                <Canvas shadows camera={{position: [5, 5, 5], fov: 50, far: 50000}}>
                    <Experience/>
                </Canvas>
            </div>
        </>

    )
}

export default App
