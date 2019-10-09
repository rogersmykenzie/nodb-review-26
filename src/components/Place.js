import React from "react";
import axios from "axios";

class Place extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    deletePlace = () => {
        axios.delete(`/api/travel/${this.props.val.id}`).then(response => {
            console.log(response.data);
            this.props.updateAllDestinations(response.data);
        })
    }

    render() {
        // const {img, place, city, country} = this.props.val
        return (
            <div>
                <img src={this.props.val.img} alt="place_img" />
                <h1>{this.props.val.place}</h1>
                <h2>{this.props.val.city}</h2>
                <h3>{this.props.val.country}</h3>
                <button onClick={this.deletePlace}>Remove From Destinations</button>
            </div>
        )
    }
}

export default Place;