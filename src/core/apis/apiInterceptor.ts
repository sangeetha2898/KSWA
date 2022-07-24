import axios from "axios";
import { API_RESPONSE } from "../core.types";

const apiRequest = axios.create()

apiRequest.defaults.baseURL = process.env.BASE_URL

apiRequest.defaults.headers.common = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
}

apiRequest.defaults.timeout = 2000;

export async function getRequest(URL: string, params?: any, baseURL?: string) {
    try {
        const result = await apiRequest.get(`/${URL}`, {
            params,
            baseURL,
        })
        return {
            data: result.data,
            status: result.status,
            type: API_RESPONSE.SUCCESS
        }
    } catch (error) {
        return {
            data: error,
            type: API_RESPONSE.FAILURE
        }
    }
}
  
export async function postRequest<T>(URL: string, payload: T) {
    try {
        const result = await apiRequest.post(`/${URL}`, payload)
        return {
            data: result.data,
            status: result.status,
            type: API_RESPONSE.SUCCESS
        }
    } catch (error) {
        return {
            data: error,
            type: API_RESPONSE.FAILURE
        }
    }
}
  
export async function patchRequest<T>(URL: string, payload: T) {
    try {
        const result = await apiRequest.patch(`/${URL}`, payload)
        return {
            data: result.data,
            status: result.status,
            type: API_RESPONSE.SUCCESS
        }
    } catch (error) {
        return {
            data: error,
            type: API_RESPONSE.FAILURE
        }
    }
}
  
export async function deleteRequest(URL: string) {
    try {
        const result = await apiRequest.delete(`/${URL}`)
        return {
            data: result.data,
            status: result.status,
            type: API_RESPONSE.SUCCESS
        }
    } catch (error) {
        return {
            data: error,
            type: API_RESPONSE.FAILURE
        }
    }
}