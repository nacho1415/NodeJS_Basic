const http = require('http');

const Server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'}) // 특정 브라우저에서는 문자열인지 html인지 구분을 못하기에 알려주는 역할 
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Hello Client!</p>');
})
    .listen(8080, () => {
        console.log('8080번 포트에서 서버 대기 중입니다.')
    });
Server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
Server.on('error', () => {
    console.log(error);
});
