import * as api from '../api';
//must create action creators >> are function that return an action.
//an action is object that has a type key and payload key
//use async dipatch functions


export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()

        dispatch({type: 'FETCH_ALL', payload: data})
    } catch(error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post)

        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error)
    }
}