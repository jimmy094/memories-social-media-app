//posts will be an array so set state = empty array


export default reducer = (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE' : 
            return posts
        default:
            break;
    }
}