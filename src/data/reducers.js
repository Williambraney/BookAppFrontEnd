// this function is setting itself equal to what we get from the API
const loaded = (state, action) => (
    {
    ...action.data  
})



const reducer = (state, action) => {
    switch (action.type) {
        case "LOADED": return loaded(state, action)
        default: return state;
    }
}

export default reducer
