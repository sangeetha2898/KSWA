import { Store, legacy_createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import createRootReducer from './rootReducer'
import { RootState } from './RootState'
import { composeWithDevTools } from 'redux-devtools-extension';

export const configureStore = (initialState?: RootState) => {
    const epicMiddleware = createEpicMiddleware()
    let middleware = applyMiddleware(epicMiddleware)

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    const store = legacy_createStore(
        createRootReducer() as any, 
        initialState as any, 
        middleware
    ) as Store<RootState>;

    const storeWithMethods = {
        store,
        runEpic: epicMiddleware.run
    }

    return storeWithMethods
}