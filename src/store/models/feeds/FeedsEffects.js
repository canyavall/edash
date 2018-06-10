// Main Components
import { dispatch } from '@rematch/core'

// Custom Components
import {attemptRequest} from '../utils'

const FeedsEffects = {
    fetchLastRedditEffect () {
        function onError () {
            console.log("Error on fetchLastRedditEffect")
        }
        function onSuccess (response) {
            dispatch.feeds.updateFeed(response.data.children)
        }
        const url = 'https://www.reddit.com/r/SummonersWar/top/.json?count=20'
        attemptRequest(url, onSuccess, onError)
    },

}

export default FeedsEffects