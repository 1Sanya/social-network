import React from "react"
import s from './Friends_search.module.css'

let Friends_search = (props) => {
    return (
        <div className={s.wrapper}>
            <input className={s.input} type="text" placeholder="Search"/>
        </div>
    )
}

export default Friends_search;