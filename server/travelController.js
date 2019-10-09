let travelDestinations = [];

function addDestination(req, res) {
    //img, city, country, place (optional)
    const {img, city, country, place} = req.body;
    travelDestinations.push({
        img,
        city,
        country,
        place
    })
    //respond
    res.status(200).json(travelDestinations);
}

module.exports = {
    addDestination
}