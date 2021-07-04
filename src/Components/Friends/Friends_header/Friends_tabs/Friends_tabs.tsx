import React from "react";
import s from './Friends_tabs.module.css'
import {Link} from "react-router-dom";

let Friends_tabs = () => {

    let selectedToggle = () => {

    }

    return (
        <div className={s.wrapper}>
            <Link className={`${s.link} ${s.selected}`} onClick={selectedToggle} to='/friends?section=all'>All friends
                107</Link>
            <Link className={s.link} onClick={selectedToggle} to='/friends?section=online'>Friends online 28</Link>
        </div>
    )
}

export default Friends_tabs;