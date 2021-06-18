let FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
let OPED_DIALOG = 'OPEN-DIALOG';
let CALL = 'CALL';

let initialState = {
    profiles: [
         {id: 1, name: 'Sanya', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'},
         {id: 2, name: 'Danya', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'},
         {id: 3, name: 'Dima', isFollow: false, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'},
         {id: 4, name: 'Nasty', isFollow: true, pic: 'https://svirtus.cdnvideo.ru/TvRTmt9sgudd3kSzLsTE_HeqZus=/0x0:583x585/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/66/661cc81674bd7cd63f56bdc2826fb8b3.png?m=cf0455e62a7aa51de43f6a1947ff0198'}
    ]
}


let friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                profiles: state.profiles.map (n => {
                    if (action.userId === n.id) {
                        return {...n, isFollow: !n.isFollow}
                    }
                    return n;
                })
            }
        case OPED_DIALOG:
            return {
                state
            }
        case CALL:
            return {
                state
            }

        default: return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW_TOGGLE, userId: userId })
export const OpenDialogAC = (userId) => ({ type: OPED_DIALOG, userId: userId })
export const CallAC = (userId) => ({ type: CALL, userId: userId })


export default friendsReducer;