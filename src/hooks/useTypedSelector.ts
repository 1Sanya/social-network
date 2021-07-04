import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../Redux/store";

export const useTypedSelector:TypedUseSelectorHook<AppStateType> = useSelector