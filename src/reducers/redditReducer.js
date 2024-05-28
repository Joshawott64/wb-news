import axios from "axios"

const initialState = {
    loading: false,
    articles: []
}

// async (thunk) function
const requestArticles = async (dispatch) => {
    dispatch({ type: 'PENDING' })

    let articles = await axios.get('/api/reddit').then((res) => res.data)

    dispatch({ type: 'REQUEST_ARTICLES', payload: articles })
}

const redditReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PENDING':
            return {...state, loading: true}
        case 'REQUEST_ARTICLES':
            return {...state, loading: false, articles: action.payload}
        default:
            return state
    }
}

export default redditReducer
export { requestArticles }