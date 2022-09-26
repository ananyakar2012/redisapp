import express from 'express';
import redis from 'redis'
import request from 'request'
const app = express();
const port = 8088;

//Connecting redis
const client = redis.createClient({
    host: '127.0.0.1',
    port: 6379
})

// default set zero



var applicationUrl = 'https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=india'
request(applicationUrl, {json: true}, (err, res, body) => {
    
    var dataJson = body.parse
        
    app.get('/',(req,res) => {
        client.get('dataname', (err,dataname )=> {
            
            if (dataname == dataJson) {
                res.send('Country data :'+dataname);
            } else {
                client.set('dataname', dataJson)
            }
        }) 
    })
    console.log(dataBody)
})
// Default route


app.listen(port,() => {
    console.log('app is running on port'+ port)
})