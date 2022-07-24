import { Epic, ofType } from "redux-observable";
import { Observable, from, switchMap, mergeMap, throwError } from 'rxjs'
import { getRandomTodo } from "../../core/apis/api";
import { Action, API_RESPONSE, IApiResponse } from "../../core/core.types";
import { HomeActions, updateHomeMsg, updateHomeMsgFailed } from "./home.action";

export const initHomeEpic: Epic = (
    action$: Observable<Action<any>>,
) => {
    return action$.pipe(
        ofType(HomeActions.INIT_HOME),
        switchMap(() => {
            return from(getRandomTodo()).pipe(
                mergeMap((res: IApiResponse) => {
                    if (res.type === API_RESPONSE.FAILURE) {
                        console.log('Error here', res.data.response.status)
                        return from([
                            updateHomeMsgFailed(),
                        ])
                    }
                    return from([
                        updateHomeMsg(res.data.title)
                    ])
                })
            )
        })
    )
}

export default [
    initHomeEpic
]