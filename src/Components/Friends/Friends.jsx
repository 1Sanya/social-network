import React from "react";
import Friends_tabs from "./Friends_tabs/Friends_tabs";
import Friends_list from "./Friends_list/Friends_list";
import Friends_search from "./Friends_search/Friends_search";

let Friends = (props) => {
    return (
        <div>
            <Friends_tabs/>
            <Friends_search/>
            <Friends_list/>
        </div>
    )
}

export default Friends;