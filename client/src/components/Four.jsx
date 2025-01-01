import React, {useLayoutEffect, useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import gsap from "gsap";
import {useGLTF, useScroll} from "@react-three/drei";

const Four = () => {
    const tl = useRef()
    const boxRef = useRef()
    const deskRef = useRef()
    const scroll = useScroll()
    const {nodes, materials} = useGLTF("./assets/models/room.glb")

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: "power1.inOut"}});

        tl.current
            .to(boxRef.current.position, {x: -4}, 1)
            .to(deskRef.current.position, {x: 5}, 1)
            .to(boxRef.current.position, {x: 6}, 20)
        return () => {
            tl.current?.kill(); // Уничтожаем таймлайн при размонтировании
        };
    }, []);

    return (
        <>
            <group ref={boxRef} position={[-6,0,0]}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]}/>
                    <meshStandardMaterial color="orange"/>
                </mesh>
            </group>

            <group ref={deskRef} position={[-9,0,0]}>
                <mesh
                    geometry={nodes.desk.geometry}
                    material={materials.desk}
                    scale={[0.3, 0.3, 0.3]}
                >
                </mesh>
            </group>
        </>
    );
};

export default Four;