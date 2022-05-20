const http = require('http');

http.createServer((req, res) => {
  console.log('이건가?',req.url, req.headers.cookie);
//   console.log('dasd')
  res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
  res.end('Hello Cookie');
})
  .listen(8083, () => {
    console.log('8083번 포트에서 서버 대기 중입니다!');
  });