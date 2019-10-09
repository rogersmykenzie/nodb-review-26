import React from "react";
import axios from "axios";
import Place from "./Place";

class MyDestinations extends React.Component {
    constructor() {
        super();
        this.state = {
            allDestinations: []
        }
    }

    componentDidMount() {
        axios.get("/api/travel")
        .then(response => {
            console.log(response.data);
            this.setState({allDestinations: response.data});
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {

        let mappedDestinations = this.state.allDestinations.map((val) => {
            return (
                <Place val={val} />
            )
        })

        return (
            <div>
                <h1>My Destinations</h1>
                {mappedDestinations}
            </div>
        )
    }
}

export default MyDestinations;