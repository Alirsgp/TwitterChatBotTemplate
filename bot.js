console.log('The replier bot is starting');
 
var Twit = require('twit');
 
var config = require('./config2');
var T = new Twit(config);
 
 
//Setting up a user stream
var stream = T.stream('user');
 
//Anytime someone follows me
stream.on('tweet', tweetEvent);
 
function tweetEvent(eventMsg) {
   
 
    var replyto = eventMsg.id_str;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;
 
 
function tweetIt(replyto, txt) {
 
   
    var tweet = {
    status: txt,
    in_reply_to_status_id: replyto
    }
 
    T.post('statuses/update', tweet, tweeted);
 
    function tweeted(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It worked!");
        }
       
    }
}