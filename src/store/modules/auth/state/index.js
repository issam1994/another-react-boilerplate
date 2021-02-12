import { computed } from 'easy-peasy'

const state = {
    token: null,
    isAuthenticated: computed(({ token }) => token ? true : false),
}

export default state