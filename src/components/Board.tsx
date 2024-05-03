import React from 'react';
import style from "./Board.module.scss";

const Board: React.FC = () => {
    return (<div className={style.board}>
        <div className={style.rect}>
            <div className={style.gameArea}>
                <div className={style.ballArea}></div>
                <div className={style.bouncerArea}></div>
            </div>
        </div>
    </div>);
};

export default Board;