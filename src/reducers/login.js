const loginReducer = (state={logged:false}, action) => {
    switch (action.type){
        case 'SUCCESSFUL_LOGIN':
            return {
                logged:true,
                username:action.username
            };
        case 'LOGIN_ATTEMPT':
            return {
                logged:false,
                attemptedUsername:action.username
            };
        default:
            return state;
    }
}

export default loginReducer