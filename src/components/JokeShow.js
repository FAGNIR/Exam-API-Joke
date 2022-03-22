import React from 'react';
import store from '../store/store';

class JokeShow extends React.Component {

    render() {

        if (!store.getState().type) {

            console.log(store.getState().type);
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only"></span>
                </div>
            );
        }
        else {
            console.log(store.getState().type);
            if (store.getState().setup) {
                return (
                    <div>
                        <p className="text-primary"><b>Setup: </b> {store.getState().setup} </p>
                        <p className="text-primary"><b>Delivery: </b> {store.getState().delivery} </p>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <p className="text-primary"><b>Joke: </b> {store.getState().joke} </p>

                    </div>
                );
            }
        }
    }

}

export default JokeShow;