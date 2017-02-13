function myRoutes(app) {

    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public')
    })


}

module.exports = {
    myRoutes
}