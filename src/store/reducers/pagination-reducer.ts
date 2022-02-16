

const initialState: PaginationType = {
    currentPage: 1,
    limit: 10,
    startTodo: 1,
    endTodo: 10
}

export const paginationReducer = (state: PaginationType = initialState, action: PaginationActionsType): PaginationType => {
    switch (action.type) {
        case 'SET-CURRENT-PAGE': {
            const endTodo = action.currentPage * state.limit;
            const startTodo = endTodo - state.limit;
            return {
                ...state,
                endTodo,
                startTodo,
                currentPage: action.currentPage,
            }
        }
        default:
            return {...state};
    }
}


export const setCurrentPageAC = (currentPage: number) =>
    ({type: 'SET-CURRENT-PAGE', currentPage} as const)

export type PaginationType = {
    currentPage: number,
    limit: number,
    startTodo: number,
    endTodo: number
}


type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>


export type PaginationActionsType = setCurrentPageAT