export const myMessage = (message,nickname) => {
    return {
        type: 'MY_MESSAGE',
        message,
        nickname,
    }
}

export const otherMessage = (message,nickname) => {
    return  {
        type: 'OTHER_MESSAGE',
        message,
        nickname,
    }
}

export const loginAttempt = (username) => {
    return  {
        type: 'LOGIN_ATTEMPT',
        username,
    }
}

export const successfulLogin = (username) => {
    return  {
        type: 'SUCCESSFUL_LOGIN',
        username
    }
}

