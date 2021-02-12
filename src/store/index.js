import { createStore } from 'easy-peasy'
import auth from './modules/auth'

const rootModule = {
    auth
}
const store = createStore(rootModule);

export default store;