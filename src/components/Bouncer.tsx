import React, { useEffect, useContext, useState } from 'react';
import style from "./Bouncer.module.css";
import { GlobalContext } from '../context/GlobalContext';

const Bouncer: React.FC = () => {
    const { mouseX } = useContext(GlobalContext);
    const [leftPosition, setLeftPosition] = useState(mouseX);
    const bouncerSize = [140, 210, 280];

    useEffect(() => {
        // console.log(mouseX)
        const windowWidth  = window.innerWidth;
        const bouncerWidth = bouncerSize[0];
        if(mouseX < bouncerWidth){
            setLeftPosition(0);
        }
        else if(mouseX > (windowWidth-bouncerWidth)){
            setLeftPosition(windowWidth-bouncerWidth-40);
        }
        else{
            setLeftPosition(mouseX - 20 - bouncerWidth/2);
        }
    }, [mouseX]);


    return (
        <div className={style.bouncerSmall} style={{ left: `${leftPosition}px`, width: bouncerSize[0] }} ></div>
    );
};

export default Bouncer;
