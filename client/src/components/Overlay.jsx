import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {Scroll} from "@react-three/drei";
import vidosOne from "../../public/assets/videos/rack1.webm";
import "./Overlay.css"

const Overlay = () => {

    return (
        <>
            <Scroll html>
                <div>
                    <div className="h-screen border-2 border-black">
                        <video className="absolute" autoPlay muted playsInline={true} key={vidosOne}>
                            <source src={vidosOne}/>
                        </video>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">HELLO22</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 2</h1>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 2</h2>

                    </div>
                    <div className="h-screen border-2 border-red-500">
                        {/*<h1 className="mt-14 absolute text-white font-bold">Component 3</h1>*/}
                        <h2 className="content-center absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 3</h2>

                    </div>
                    <div className="h-screen  border-2 border-black text-center">
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 4</h2>

                        {/*<div className="uppercase text-[40vw] ">*/}
                        {/*    <h1 id="page4">*/}
                        {/*        SMART_DESK*/}
                        {/*    </h1>*/}
                        {/*</div>*/}
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 5</h1>
                        <div className="absolute text-center text-white font-semibold">HELLO</div>
                        <div className="mt-4 absolute text-center text-white font-semibold">HELLO1</div>
                        <h2 className=" absolute mt-12 text-center text-[10vw] text-white font-semibold">content button</h2>
                    </div>
                    <div className="border-2 border-black">
                        <h1 className="text-white font-bold">Component 6</h1>
                        {/*<video id="page5video1" className=" bg-red-600 " autoPlay muted playsInline={true}>*/}
                        {/*    <source className="h-[400%] w-[400%] bg-orange-400" src={vidosOne}/>*/}
                        {/*</video>*/}
                        {/*<video id="page5video2" className=" bg-red-600 " autoPlay muted playsInline={true}>*/}
                        {/*    <source className="h-[400%] w-[400%] bg-orange-400" src={vidosTwo}/>*/}
                        {/*</video>*/}
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 7</h1>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 7</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 8</h1>
                        <h2 className=" absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 8</h2>
                    </div>
                    <div className="h-screen border-2 border-black">
                        <h1 className="absolute text-white font-bold">Component 9</h1>
                        <h2 className="absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 9</h2>
                    </div>
                    <div className=" h-screen border-2 border-black">
                        <h1 className="absolute text-white font-extrabold">Component 10</h1>
                        <h2 className="absolute mt-12 text-center text-[10vw]  text-white font-extrabold">Component 10</h2>
                    </div>
                </div>
            </Scroll>
        </>
    );
};

export default Overlay;