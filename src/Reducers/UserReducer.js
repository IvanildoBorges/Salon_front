export const initialState = {
    avatar: '',
    favoritos: [],
    agendamentos: [],
    completos: []
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;

        case '':
            return {  };
        break;

        case '':
            return {  };
        break;
        
        case '':
            return {  };
        break;

        default:
            return state;
        break;
    }
}