import { Action } from "../../core/core.types"

export const HomeActions = {
    INIT_HOME: 'home/INIT_HOME',
    UPDATE_MESSAGE: 'home/UPDATE_MESSAGE',
    UPDATE_MESSAGE_FAILED: 'home/UPDATE_MESSAGE_FAILED'
}

export const initHome = (): Action<null> => ({
    type: HomeActions.INIT_HOME,
    payload: null
})

export const updateHomeMsg = (message: string): Action<string> => ({
    type: HomeActions.UPDATE_MESSAGE,
    payload: message 
})

export const updateHomeMsgFailed = (): Action<null> => ({
    type: HomeActions.UPDATE_MESSAGE_FAILED,
    payload: null 
})
