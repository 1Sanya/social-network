import React from "react";
import Friends_list from "./Friends_list/Friends_list";
import Friends_search from "./Friends_search/Friends_search";
import Friends_header from "./Friends_header/Friends_header";

import May_be_friends from "./May_be_friends/May_be_friends";
import Peoples_category from "./Peoples_category/Peoples_category";

import s from './Friends.module.css'

let Friends = (props) => {

    if(props.profiles.length === 0) {
        props.setUsers([
            {id: 1, name: 'Sanya', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'},
            {id: 2, name: 'Danya', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'},
            {id: 3, name: 'Dima', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'},
            {id: 4, name: 'Nasty', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'}
        ])
    }

    return (
        <div className={s.wrapper} >
            <div >
                <Friends_header/>
                <Friends_search/>
                <Friends_list profiles={props.profiles} followToggle={props.followToggle} setUsers={props.setUsers}/>
            </div>
            <div>
                <Peoples_category/>
                <May_be_friends/>
            </div>

        </div>

    )
}

export default Friends;