import React, {useContext} from 'react';
import style from "./Board.module.css";
import Bouncer from "./Bouncer";
import { GlobalContext} from '../context/GlobalContext';

const Board: React.FC = () => {

    const { updateMouseX } = useContext(GlobalContext);

    const handleMouseMove = (event: any) => { 
        //console.log('Mouse position:', event.clientX); 
        updateMouseX(event.clientX);
    }; 

    return (
        <div className={style.board} onMouseMove={handleMouseMove}>
            <div className={style.rect}>
                <div className={style.gameArea}>
                    <div className={style.ballArea}></div>
                    <div className={style.bouncerArea}>
                        <Bouncer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Board;