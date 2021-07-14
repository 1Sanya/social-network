import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


import {AppDispatch, AppStateType} from "../Redux/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector