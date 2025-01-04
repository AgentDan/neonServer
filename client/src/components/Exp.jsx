import React, {useEffect} from 'react';
import {Scroll} from "@react-three/drei";

const Exp = ({setButton, button}) => {

    const onclickbut = () => {
        setButton(!button)
        console.log(button)
    }

    return (
        <Scroll html>
            {
                !button && <div className="text-white">HELLO222</div>
            }
            <div className="text-white">
                <div
                    className="cursor-pointer text-center content-center bg-red-600 h-[25px] w-[100px]"
                    onClick={onclickbut}
                >HELLO</div>
            </div>
        </Scroll>
    );
};

export default Exp;