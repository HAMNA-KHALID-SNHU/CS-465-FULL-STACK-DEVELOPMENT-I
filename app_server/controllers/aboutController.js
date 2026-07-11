const about = (req, res) => {
    res.render('about', {
        title: 'About',
        about: true
    });
};

module.exports = {
    about
};