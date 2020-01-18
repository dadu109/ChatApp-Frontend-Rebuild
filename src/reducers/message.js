const messageReducer = (state = [], action) => {
    switch (action.type){
        case 'MY_MESSAGE':
            return [...state,{
                type:'myMessage',
                message:action.message,
                nickname:action.nickname,
                time: Date.now(),
            }];
        case 'OTHER_MESSAGE':
            return [...state,{
                type:'otherMessage',
                nickname:action.nickname,
                message:action.message,
                time: Date.now(),
            }];
        default:
            return state;
    }
}

export default messageReducer;