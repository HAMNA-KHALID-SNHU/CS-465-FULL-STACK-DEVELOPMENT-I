const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms',
        rooms: true
    });
};

module.exports = {
    rooms
};