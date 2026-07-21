const trips = require('../../data/trips.json');

const index = (req, res) => {
    res.render('index', {
        title: 'Travlr Getaways',
        home: true
    });
};

const travel = (req, res) => {
    res.render('travel', {
        title: 'Travlr Getaways',
        travel: true,
        trips
    });
};

module.exports = {
    index,
    travel
};