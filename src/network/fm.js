import { request } from './request'

export function getFM() {
    return request({
        url: "personal_fm",
    })
}