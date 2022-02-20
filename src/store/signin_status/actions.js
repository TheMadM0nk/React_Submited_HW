import { SIGNIN_STATUS_TRUE, SIGNIN_STATUS_FALSE } from "./types"

export const signinStatusTrue = () => {
    return { type: SIGNIN_STATUS_TRUE };
}

export const signinStatusFalse = () => {
    return { type: SIGNIN_STATUS_FALSE };
}