import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const pageOne = () => {
    return <div>Page One</div>
}

const pageTwo = () => {
    return <div>Page Two</div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={pageOne} />
                <Route path="/pageTwo" exact component={pageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App;