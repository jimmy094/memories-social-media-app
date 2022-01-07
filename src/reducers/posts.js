//posts will be an array so set state = empty array
// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from actionTypes

export default posts => (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE' : 
            return posts
        default:
            break;
    }
}