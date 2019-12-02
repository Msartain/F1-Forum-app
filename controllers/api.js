const User = require('../models/user');
const request = require('request');


module.exports = {
    showDrivers,
    showConstructors
}

function showDrivers(req, res){
    let url = "http://ergast.com/api/f1/current/driverStandings.json" 
    request(url, function (err, response, body) {
        if (!err && res.statusCode === 200) {
            let parsedData = JSON.parse(body);
            let driverTable = parsedData.MRData.StandingsTable.StandingsLists;
            res.render("api/drivers", {driverTable: driverTable,  user: req.user})
        }
    });
}

function showConstructors(req, res){
    let url = "http://ergast.com/api/f1/current/constructorStandings.json" 
    request(url, function (err, response, body) {
        if (!err && res.statusCode === 200) {
            // console.log("BODY:  " + typeof(body))
            let parsedData = JSON.parse(body);
            let teamTable = parsedData.MRData.StandingsTable.StandingsLists;
            res.render("api/constructors", {teamTable: teamTable, user: req.user})
        }
    });
}