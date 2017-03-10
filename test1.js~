//var object1='{"title":"video1","date":"03/03/2017"}';
var fs = require("fs");
//var JSONStream = require('../node_modules/json-stream');
var object1 = fs.readFileSync("object1.JSON");
var obj1=JSON.parse(object1);
var redis=require('../node_modules/redis');
//var Redis=require('../node_modules/redis-stream');
var Client = redis.createClient(6379, '127.0.0.1');
//var client=new Redis(6379, '127.0.0.1');
Client.on('connect', function(){
    console.log('Connected!');
});
//var stream=client.stream();
//var command1=['HGET', 'vi1', 'title'];
//stream.redis.write(redis.parse(command1));
Client.incrby('id_max', '1');
Client.get('id_max', function(err, max_id){
    if (err){
    } else {
    	Client.hmset('vi:'+max_id, 'title', obj1.title, 'date', obj1.date, 'description', obj1.description, 'id',max_id);
  	Client.hgetall('vi:'+max_id, function(err, results) {
  	    if (err) {
            } else {
              console.log(results)
            }
        });
	// Here we should transfer the new "id" to the video uploader
	Client.quit();
    }
});
//stream.end();
