// Main Components
import { init } from "@rematch/core";

// Custom Components
import feeds from './models/FeedsModel'

export const store = init({
    models: {
        feeds
    }
})