import { Action } from "../../core/core.types";
import { HomeActions } from "./home.action";
import { HomeState, IHomeState } from "./home.state";

export const HomeReducer = (
    state: IHomeState = HomeState,
    action: Action<any>
): IHomeState => {
    switch (action.type) {
        case HomeActions.INIT_HOME:
            return {
                ...state,
                loading: true
            }
        case HomeActions.UPDATE_MESSAGE:
            return {
                ...state,
                message: action.payload,
                loading: false
            }
        case HomeActions.UPDATE_MESSAGE_FAILED:
            return {
                ...state,
                message: 'FAILED',
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}
