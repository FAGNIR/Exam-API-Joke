import { createStore } from 'redux'

const initialStateJoke = {

    type: "",
    joke: "",
    setup: "",
    delivery: ""
}

const reduser = function (state = initialStateJoke, action) {

    switch (action.type) {
        case "ACTION_SET_TYPE":
            {
                return { ...state, type: action.payload }
            }
        case "ACTION_SET_JOKE":
            {
                return { ...state, joke: action.payload }
            }
        case "ACTION_SET_SETUP":
            {
                return { ...state, setup: action.payload }
            }
        case "ACTION_SET_DELIVERY":
            {
                return { ...state, delivery: action.payload }
            }
        default: return state;
    }

}

const store = createStore(reduser);

store.subscribe(function () {
    console.log(store.getState());
});

export default store;