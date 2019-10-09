let travelDestinations = [];

let id = 0;
function addDestination(req, res) {
    //img, city, country, place (optional)
    const {img, city, country, place} = req.body;
    travelDestinations.push({
        img,
        city,
        country,
        place,
        id
    })
    id++;
    //respond
    res.status(200).json(travelDestinations);
}

function getDestination(req, res) {
    res.status(200).json(travelDestinations);
}

function removeDestination(req, res) {
    const {id} = req.params;
    console.log(id);
    const index = travelDestinations.findIndex(val => {
        if(val.id == id) {
            return true;
        }
    });
    travelDestinations.splice(index, 1);
    res.status(200).json(travelDestinations);
}

module.exports = {
    addDestination,
    getDestination,
    removeDestination
}