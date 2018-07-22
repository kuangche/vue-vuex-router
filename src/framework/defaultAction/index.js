import { handleMutations } from 'framework'
import config from 'conf'

const { mutationTypes: { HASNOTCONFIGACTIONTYPE } } = config

const defaultAction = {
    state: {
        noop: null
    },
    mutations: handleMutations({
        [HASNOTCONFIGACTIONTYPE]: {
            success(state){
                state.noop = null
            }
        }
    })
}

export default defaultAction
