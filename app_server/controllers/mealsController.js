const meals = (req, res) => {
    res.render('meals', {
        title: 'Meals',
        meals: true
    });
};

module.exports = {
    meals
};