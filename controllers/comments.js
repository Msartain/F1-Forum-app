const User = require('../models/user');


module.exports = {
create
}



function create(req, res){
    console.log('CREATE FUNCTION HIT')
    // post.findById(req.params.postId, function(err, user){
    //     let obj = {
    //         comment: req.body
    //     }
    //     let comment = new comment(obj);
    //     comment.save(function(err){
    //         if(err) console.log(err)
    //         res.redirect(`/show/${post._id}`);
    //     })
    // })
    // console.log(req.body)
    // req.user.comments.push(req.body);
    // console.log('COMMENTS: ' + req.user.comments)
    // console.log('BEFORE SAVE')
    // console.log('A!A!A!AA' + req.user.posts.comments)
    // req.user.save(function(err){
    //     if (err) return res.render('logged-In/show');
    //     res.redirect('/home', );
    // });
}

// function createFlightTicket(req, res) {
//     Flight.findById(req.body.flightId, function(err, flight) {
//         let obj = { 
//             price: req.body.price,
//             seat: req.body.seat,
//             flight: [req.body.flightId]
//         }
//         let ticket = new Ticket(obj);
//         ticket.save(function(err) {
//             if(err)console.log(err)  
//             res.redirect(`/flights/${flight._id}`);
//           });   
//  })
// }