import { thunk } from 'easy-peasy'
import axios from 'axios'


const THUNKS = {
    register: thunk(async (actions, payload) => {
        try {
            let { token } = (await axios.post('/auth/register', payload)).data
            actions.saveToken(token)
        } catch (e) {
            console.log("error in register()", e)
        }
    }),
    login: thunk(async (actions, payload) => {
        try {
            let { token } = (await axios.post('/auth/login', payload)).data
            actions.saveToken(token)
        } catch (e) {
            console.log("error in login()", e)
        }
    }),
    tryAutoLogin: thunk((actions) => {
        let token = localStorage.getItem('token')
        if (!token) {
            return
        } else {
            actions.saveToken(token)
        }
    })
}

export default THUNKS