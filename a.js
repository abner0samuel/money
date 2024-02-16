let http =request('http');
http.createServer(function(req,res){
    res.write('abner kure');
    res.end();
}).listen(1234);