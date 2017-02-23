import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer form './Reducers/reducer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const store = createStore(function(state = { test: "Test" }, action) {
    return state;
});
store.subscribe( () => {
    console.log(JSON.stringify(store.getState(), null, " "));
});

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
