var restify = require('restify');

function hotelr(req, res, next){
    var dataRest = [{
        name: 'Hotel Tai',
        local: 'São Paulo',
        money: '100,00',
    },
    {
        name: 'Hotel Tai',
        local: 'São Paulo',
        money: '100,00',
    },
    {
        name: 'Hotel Tai',
        local: 'São Paulo',
        money: '100,00',
    }]

    res.json(dataRest);
    next();

}

var server = restify.createServer({
    name: 'Node 1'
});

/* http://localhost:8989/hotel -> chamar a função hotelr */
server.get('/hotel', hotelr);

server.listen(8989, function(){
    console.log('%s sendo executado', server.name);
});