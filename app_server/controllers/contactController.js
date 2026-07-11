const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact',
        contact: true
    });
};

module.exports = {
    contact
};