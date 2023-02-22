import { UserState } from "../../types/user";
import { UserAction } from "../../types/user";
import { UserActionTypes } from "../../types/user";

/* Описание типа состояния */

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null, users: [] };
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { ...state, loading: false, error: null, users: action.payload };
        case UserActionTypes.FETCH_USERS_ERROR:
            return { ...state, loading: false, error: action.payload, users: [] }
        default:
            return state;
    }
}