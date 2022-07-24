import * as React from 'react';
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { configureStore } from './core/redux/store'
import rootEpic from './core/redux/rootEpic';

const state = configureStore()
const store = state.store
state.runEpic(rootEpic)

const container = document.getElementById('app')
const root = createRoot(container!); 
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);