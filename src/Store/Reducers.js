import  {createSlice} from "@reduxjs/toolkit"
 const rootReducer = createSlice({
    name:"movies",
    initialState:{
        favorites:[],
        selectedMovie:null
    },
    reducers:{
        addTOFavorite(state,action){
        state.favorites.push(action.payload)
        },
        removeFromFavorite(state,action){
            state.favorites=state.favorites.filter(movie => movie.id !== action.payload)
        },
        addSelectedMovie(state,action){
            state.selectedMovie = action.payload
        }
    }
})

    export const rootActions = rootReducer.actions
    export default rootReducer.reducer;










    // function rootReducer(state = initialState,action){
//     switch(action.type){
//         case ADD_TO_FAVORITES:
//         return {
//             ...state,
//             favorites:[...state.favorites,action.payload]
//         };
//         case REMOVE_FROM_FAVORITES:
//             return {
//                 ...state,
//                 favorites:state.favorites.filter(movie => movie.id !== action.payload)
//             };
//             default:
//                 return state;
//     }
//     }