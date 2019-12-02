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
    // let rootURL = "http://ergast.com/api/f1/results.json";
    // request(rootURL, function(err, body){
    //     if(!err && res.statusCode === 200){
    //         let parsedTable = JSON.parse(body);
    //         console.log(parsedTable)
    //         console.log('TYPE' + typeof(body))
    //         res.render('api/drivers', {user: req.user})
    //     }
    // })
}

function showConstructors(req, res){
    let url = "http://ergast.com/api/f1/current/constructorStandings.json" 
    request(url, function (err, response, body) {
        if (!err && res.statusCode === 200) {
            console.log("BODY:  " + typeof(body))
            let parsedData = JSON.parse(body);
            // let currRace = parsedData.MRData.RaceTable.Races;
            let currDrivers = parsedData.MRData.StandingsTable.StandingsLists;
            // res.render("results", {currRace:currRace})
            res.render("api/constructors", {currDrivers: currDrivers, user: req.user})
        }
    });
    // res.render('api/constructors', {user: req.user})
}