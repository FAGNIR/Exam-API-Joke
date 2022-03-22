import React from 'react';
import { connect } from 'react-redux'

import {CreateActionSetType, CreateActionSetJoke, CreateActionSetSetup, CreateActionSetDelivery} from '../actions/actions'
import JokeShow from '../components/JokeShow';


class Joke extends React.Component {
    jokeSelect = 'Any';

    movieURL = `https://sv443.net/jokeapi/v2/joke/`;
    JokeResponce = {};

    getJoke() {

        fetch(this.movieURL + this.jokeSelect)
            .then((responce) => {
                if (responce.status >= 200 && responce.status < 300) {
                    console.log(responce.status);
                    return responce.json();
                } else {
                    let error = new Error(responce.statusText);
                    error.response = responce;
                    throw error
                }
            
            })
            .then((data) => {
                console.log(data);

                this.props.dispatch(CreateActionSetJoke(""));
                this.props.dispatch(CreateActionSetSetup(""));
                this.props.dispatch(CreateActionSetDelivery(""));
                this.props.dispatch(CreateActionSetType(""));

                this.props.dispatch(CreateActionSetJoke(data.joke));
                this.props.dispatch(CreateActionSetSetup(data.setup));
                this.props.dispatch(CreateActionSetDelivery(data.delivery));
                this.props.dispatch(CreateActionSetType(data.type));

            })
            .catch((e)=>{
                console.log('Error: ' + e.message);
                console.log(e.response);
            })
    }

    render() {

        return (
            <div>
                <div className="d-flex justify-content-start">
                    <div className="p-2 ">
                        <select className="selectpicker" onChange={(event) => { this.jokeSelect = event.target.value }}>
                            <option value="Any">Any</option>
                            <option value="Programming">Programming</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                            <option value="Dark">Dark</option>
                            <option value="Pun">Pun</option>
                            <option value="Spooky">Spooky</option>
                            <option value="Christmas">Christmas</option>
                        </select>
                    </div>
                    
                    <div className="p-2">
                        <input type="button" className="btn btn-success" value="Получить шутку" onClick={() => this.getJoke()} />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="p-4 content" >
                        <JokeShow/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (state) {
    return {
  
        type: state.type,
        joke: state.joke,
        setup: state.setup,
        delivery: state.delivery
    }
  }
  
  export default connect(mapStateToProps)(Joke);
