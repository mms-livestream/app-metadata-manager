var redis = require('../node_modules/redis');
var client = redis.createClient(6379, '127.0.0.1');
client.on('connect', function(){
    console.log('Init Connected!');
});
client.set('id_max', '0');
client.set('users_max', '0');
client.sadd('users', 'momo');
client.incr('users_max');
client.sadd('users', 'momonta');
client.incr('users_max');
client.hmset('momo', 'user_id', 'U1F1', 'name', 'mohamed', 'current_video_id', '1'); //,'servers_used', ' ')
client.hget('momo', 'user_id', function(err, uid){
	client.sadd('servers_used:'+uid, 'server 1', 'server 2');
});
client.hmset('momonta', 'user_id', 'U2S1', 'name', 'moha', 'current_video_id', '2');
client.hget('momonta','user_id', function(err, uid){
	console.log(uid);
	client.sadd('servers_used:'+uid, 'server 2', 'server 3');
	client.quit();
});

