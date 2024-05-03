import { createReducer, on } from "@ngrx/store"
import { UserInterface } from "../../interfaces/user-interface"
import { loginAction } from "../actions/user.action"


export const initialState :UserInterface | null | undefined  = undefined

export const userReducer = createReducer(initialState,
    on(loginAction,(state)=>state)//clearly unfinished
)