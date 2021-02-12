import state from './state'
import actions from './actions'
import thunks from './thunks'

const auth = {
    ...state,
    ...actions,
    ...thunks,
}

export default auth