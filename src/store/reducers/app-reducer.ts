

 const initialState: AppType = {
     isLoad: 'idle',
     isFetchingTodos: false,
     pagination: {
         currentPage: 1,
         limit: 10,
     }
}

export const appReducer = (state: AppType= initialState, action: AppActionsType): AppType => {
    switch (action.type) {
        case 'SET-IS-LOAD': {
            return {...state, isLoad: action.isLoad}
        }
        case 'SET-IS-FETCHING-TODOS': {
            return {...state, isFetchingTodos: action.isFetchingTodos}
        }
        default:
            return {...state};
    }
}


export const setIsLoad = (isLoad: IsLoadType) =>
    ({type: 'SET-IS-LOAD', isLoad} as const)

 export const setIsFetchingTodosAC = (isFetchingTodos: boolean) =>
    ({type: 'SET-IS-FETCHING-TODOS', isFetchingTodos} as const)




export type AppType = {
    isLoad: IsLoadType,
    isFetchingTodos: boolean,
    pagination: {
        currentPage: number,
        limit: number,
    }
}


export type IsLoadType = 'idle' | 'loading' | 'succeeded' | 'failed'


type setAppStatusAT = ReturnType<typeof setIsLoad>
type setIsFetchingTodosAT = ReturnType<typeof setIsFetchingTodosAC>


export type AppActionsType = setAppStatusAT | setIsFetchingTodosAT