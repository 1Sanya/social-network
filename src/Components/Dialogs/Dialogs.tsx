import React from "react"
import s from './Dialogs.module.css'
import Dialogs_header from "./Dialogs_header/Dialogs_header";
import Dialogs_chats from "./DIalogs_chats/Dialogs_chats";
import Dialogs_footer from "./DIalogs_footer/Dialogs_footer";


let Dialogs = (props) => {

    return (
        <div className={s.page_wr}>
            Messenger
            <Dialogs_header/>
            <Dialogs_chats/>
            <Dialogs_footer/>
        </div>
    )
}

export default Dialogs;