import React from "react";
import Photos_name from "./Photos_name/Photos_name";
import Photos_tabs from "./Photos_tabs/Photos_tabs";
import Photos_list from "./Photos_list/Photos_list";

let Photos = () => {
    return (
        <div>
            Photos
            <Photos_name/>
            <Photos_tabs/>
            <Photos_list/>
        </div>
    )
}

export default Photos;