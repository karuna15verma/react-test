const reducer = (state = 0, action) => {
    console.log('actionaction', action);
    switch (action.type) {
       case 'INCREMENT': return state + 1
       case 'DECREMENT': return state - 1
       case 'RESET' : return 0
        default: return state
    }
 }
 export default reducer;