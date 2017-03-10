var redis = require('../node_modules/redis');
var client = redis.createClient(6379, '127.0.0.1');
client.on('connect', function(){
    console.log('Calcul Connected!');
});
// We should set all the number of viewers for each video to 0
//client.get('users_max', function(err, num_users){
//	for(var i=1; i<=num_users; i++){
client.smembers('users', function(err, result){
	console.log(result);
	for (var a in result){
		//console.log(result[a]);
		client.hget(result[a], 'current_video_id', function(err,vid){
			// If vid different from none
			client.hincrby('vi:'+vid, 'viewers', '1');
			// If it is the last user 
			//client.quit();
		});
	}
});
