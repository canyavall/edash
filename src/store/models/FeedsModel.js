//Custom Components
import FeedsState from './feeds/FeedsState'
import FeedsReducer from './feeds/FeedsReducer'
import FeedsEffects from './feeds/FeedsEffects'

const feeds = {
    state: FeedsState,
    reducers: FeedsReducer,
    effects: FeedsEffects
}

export default feeds