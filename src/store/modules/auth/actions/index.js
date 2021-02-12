import { action } from 'easy-peasy'

const actions = {
    saveToken: action((state, token) => {
        state.token = token
        localStorage.setItem('token', token)
    }),
    destroyToken: action((state) => {
        state.token = null;
        localStorage.removeItem('token');
    }),
}

export default actions