
const INITIAL_STATE = {
    programs: []
}

const ProgramReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_PROGRAMS':
            return {
                ...state,
                programs: action.data
            }
        default:
            return {
                ...state
            }
    }
}

export default ProgramReducer;