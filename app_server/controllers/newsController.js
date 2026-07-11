const news = (req, res) => {
    res.render('news', {
        title: 'News',
        news: true
    });
};

module.exports = {
    news
};