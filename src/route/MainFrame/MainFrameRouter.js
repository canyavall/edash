// Main Components
import React, { Component } from 'react';
import { dispatch } from '@rematch/core'

class MainFrameRouter extends Component {
    componentDidMount() {
        dispatch.feeds.fetchLastRedditEffect()
    }
    render() {
        return (
            <div >
            <h1 >Welcome to React</h1>
        <p >
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>
    );
    }
}

export default MainFrameRouter;