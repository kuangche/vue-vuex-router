import { createActions, handleMutations } from 'framework'

const login = {
    state: {
        user_sessionid: ''
    },
    mutations: handleMutations({

    }),
    actions: createActions({
        login: {
            url: '/api/login',
            method: 'post'
        }
    })
}

export default login
