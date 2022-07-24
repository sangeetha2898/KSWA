import { ReactPropTypes } from "react"

export type Action<T> = {
    type: string
    payload: T
    error?: any
}

export enum API_RESPONSE {
    SUCCESS,
    FAILURE
}

export interface IApiResponse {
    data: any,
    type: API_RESPONSE,
    status: number
}

export interface IDefaultComponent {
    props?: ReactPropTypes
}
