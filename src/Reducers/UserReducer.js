export const initialState = {
    avatar: '',
    id: '',
    favoritos: [],
    agendados: [],
    completos: [],
};

export const UserReducer = (state, action) => {
    switch (action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
        break;

        case 'setId':
            return { ...state, id: action.payload.id };
        break;

        case 'setFavoritos':
            return {  };
        break;

        case 'setAgendados':
            return {  };
        break;
        
        case 'setCompletos':
            return {  };
        break;

        default:
            return state;
        break;
    }
}