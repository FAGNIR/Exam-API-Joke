import React from 'react';
import { Provider } from 'react-redux'

import API from './API'
import store from '../store/store';


function AppRoot () {
    return(
        <Provider store={store}>
            <div>
                <API />
            </div>
        </Provider>
        );
}



export default AppRoot;